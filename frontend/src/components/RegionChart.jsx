import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#06b6d4",
  "#3b82f6",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

function RegionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((sales) => {
        const categoryMap = {};

        sales.forEach((item) => {
          const category = item.Product_Category || "Other";

          categoryMap[category] =
            (categoryMap[category] || 0) + Number(item.Quantity ||  0);
        });

        const chartData = Object.keys(categoryMap).map((key) => ({
          name: key,
          value: categoryMap[key],
        }));

        setData(chartData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        Product Category Analytics
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={110}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RegionChart;