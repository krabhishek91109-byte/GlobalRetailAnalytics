import { useEffect, useState } from "react";

function CustomerInsights() {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    newCustomers: 0,
    returningCustomers: 0,
    satisfaction: 96,
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((sales) => {
        const uniqueCustomers = new Set(
          sales.map((item) => `${item.Gender}-${item.Age}`)
        ).size;

        const newCustomers = Math.round(uniqueCustomers * 0.35);
        const returningCustomers = uniqueCustomers - newCustomers;

        setStats({
          totalCustomers: uniqueCustomers,
          newCustomers,
          returningCustomers,
          satisfaction: 96,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 mt-6">

      <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 transition">
        <h3 className="text-gray-400">👥 Total Customers</h3>
        <p className="text-3xl font-bold mt-2 text-cyan-400">
          {stats.totalCustomers}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 transition">
        <h3 className="text-gray-400">🆕 New Customers</h3>
        <p className="text-3xl font-bold mt-2 text-green-400">
          {stats.newCustomers}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 transition">
        <h3 className="text-gray-400">🔁 Returning</h3>
        <p className="text-3xl font-bold mt-2 text-blue-400">
          {stats.returningCustomers}
        </p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5 hover:bg-slate-700 transition">
        <h3 className="text-gray-400">⭐ Satisfaction</h3>
        <p className="text-3xl font-bold mt-2 text-yellow-400">
          {stats.satisfaction}%
        </p>
      </div>

    </div>
  );
}

export default CustomerInsights;