import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SalesCharts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((sales) => {
        const monthlySales = {};

        sales.forEach((item) => {
          const date = new Date(item.Date);
          const month = date.toLocaleString("default", {
            month: "short",
          });

          monthlySales[month] =
            (monthlySales[month] || 0) +
            Number(item.Total_Amount || 0);
        });

        const chartData = Object.keys(monthlySales).map((month) => ({
          month,
          sales: monthlySales[month],
        }));

        setData(chartData);
      });
  }, []);

  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        📈 Sales Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="month" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#06B6D4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesCharts;