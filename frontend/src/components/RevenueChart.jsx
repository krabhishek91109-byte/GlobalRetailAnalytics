import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RevenueChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((sales) => {
        const monthlyRevenue = {};

        sales.forEach((item) => {
          const date = new Date(item.Date);
          const month = date.toLocaleString("default", {
            month: "short",
          });

          monthlyRevenue[month] =
            (monthlyRevenue[month] || 0) +
            Number(item.Total_Amount || 0);
        });

        const chartData = Object.keys(monthlyRevenue).map((month) => ({
          month,
          revenue: monthlyRevenue[month],
        }));

        setData(chartData);
      });
  }, []);

  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">
        Revenue Chart
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar
            dataKey="revenue"
            fill="#06b6d4"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;