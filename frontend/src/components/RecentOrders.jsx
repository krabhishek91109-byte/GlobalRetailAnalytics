import { useEffect, useState } from "react";

function RecentOrders({ search }) {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((data) => {
        const latestOrders = [...data]
          .sort((a, b) => b.Transaction_ID - a.Transaction_ID)
          .slice(0, 10);

          setOrders(latestOrders);
      setLoading(false);
    })
    .catch(() => {
      setError("Unable to connect to server.");
      setLoading(false);
      });
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.Product_Category.toLowerCase().includes(
      search.toLowerCase()
    )
  );
if (loading) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl mt-6 text-center text-cyan-400">
      Loading orders...
    </div>
  );
}

if (error) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl mt-6 text-center text-red-400">
      {error}
    </div>
  );
}
  return (
    <div className="bg-slate-800 p-5 rounded-xl mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">
        Recent Orders
      </h2>

      <table className="w-full text-left text-white">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="py-2">Order ID</th>
            <th className="py-2">Category</th>
            <th className="py-2 text-center">Quantity</th>
            <th className="py-2 text-center">Amount</th>
            <th className="py-2 text-center">Date</th>
          </tr>
        </thead>

        <tbody>
         {filteredOrders.length === 0 ? (
  <tr>
    <td colSpan="5" className="text-center py-6 text-gray-400">
      No records found
    </td>
  </tr>
) : (
  filteredOrders.map((order) => (
    <tr
      key={order.Transaction_ID}
      className="border-b border-slate-700"
    >
      <td className="py-3">{order.Transaction_ID}</td>
      <td>{order.Product_Category}</td>
      <td className="text-center">{order.Quantity}</td>
      <td className="text-center">₹{order.Total_Amount}</td>
      <td className="text-center">{order.Date}</td>
    </tr>
  ))
)}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;