import { useEffect, useState } from "react";

function RecentOrders({ search = "" }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales?limit=1000")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
        return res.json();
      })
      .then((data) => {
      const uniqueOrders = Array.from(
  new Map(
    [...data]
      .sort(
        (a, b) =>
          new Date(b.Order_Date) - new Date(a.Order_Date)
      )
      .map((item) => [item.Order_ID, item])
  ).values()
);
const countryOrders = new Map();

uniqueOrders.forEach((order) => {
  const country = order.Country || "Unknown";

  if (!countryOrders.has(country)) {
    countryOrders.set(country, order);
  }
});

const latestOrders = Array.from(countryOrders.values()).slice(0, 10);

setOrders(latestOrders);
      })
      .catch((err) => {
        console.error("Error loading orders:", err);
        setError("Unable to load orders. Check whether the backend is running.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredOrders = orders.filter((order) =>
    String(order.Country || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="mt-6 rounded-xl bg-slate-800 p-5 text-center text-cyan-400">
        Loading orders...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-xl bg-slate-800 p-5 text-center text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl bg-slate-800 p-5">
      <h2 className="mb-4 text-xl font-bold text-white">
        Recent Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-white">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="py-2">Order ID</th>
              <th className="py-2">Country</th>
              <th className="py-2 text-center">Quantity</th>
              <th className="py-2 text-center">Sales (USD)</th>
              <th className="py-2 text-center">Year</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-6 text-center text-gray-400">
                  No records found
                </td>
              </tr>
            ) : (
              filteredOrders.map((order, index) => (
                <tr
                  key={`${order.Order_ID || "order"}-${index}`}
                  className="border-b border-slate-700"
                >
                  <td className="py-3">{order.Order_ID || "N/A"}</td>
                  <td>{order.Country || "N/A"}</td>
                  <td className="text-center">{order.Quantity ?? 0}</td>
                  <td className="text-center">
                    ${Number(order.Sales || 0).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="text-center">{order.Year || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;