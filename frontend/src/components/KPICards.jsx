import { useEffect, useState } from "react";

function KPICards() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard-data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load dashboard data");
        }
        return res.json();
      })
      .then((data) => {
        setDashboard(data);
        setError("");
      })
      .catch((err) => {
        console.error("Error loading dashboard data:", err);
        setError("Unable to load dashboard data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatNumber = (value) =>
    Number(value || 0).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });

  const cards = [
    {
      title: "Total Quantity",
      value: dashboard ? formatNumber(dashboard.total_quantity) : "—",
    },
    {
      title: "Revenue",
      value: dashboard
        ? `₹${formatNumber(dashboard.total_revenue)}`
        : "—",
    },
    {
      title: "Orders",
      value: dashboard ? formatNumber(dashboard.total_orders) : "—",
    },
    {
      title: "Customers",
      value: dashboard ? formatNumber(dashboard.total_customers) : "—",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-slate-800 rounded-xl p-5 text-gray-300"
          >
            Loading...
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <p className="text-red-400">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div key={card.title} className="bg-slate-800 rounded-xl p-5">
          <h3 className="text-gray-400">{card.title}</h3>
          <p className="text-3xl font-bold mt-2 text-white">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default KPICards;