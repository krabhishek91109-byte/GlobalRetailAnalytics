import { useEffect, useState } from "react";
import {
PieChart,
Pie,
Cell,
Tooltip,
ResponsiveContainer,
Legend,
} from "recharts";

const COLORS = ["#06b6d4", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

function RegionChart() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
fetch(`${import.meta.env.VITE_API_URL}/sales?limit=5000`)
.then((res) => {
if (!res.ok) {
throw new Error("Failed to fetch sales data");
}
return res.json();
})
.then((sales) => {
const categoryMap = {};

    sales.forEach((item) => {
      const category = item.Category || item.Product_Category;

      if (!category) return;

      categoryMap[category] =
        (categoryMap[category] || 0) + Number(item.Quantity || 0);
    });

    const chartData = Object.entries(categoryMap).map(
      ([name, quantity]) => ({
        name,
        value: quantity,
      })
    );

    setData(chartData);
    setError("");
  })
  .catch((err) => {
    console.error("Category chart error:", err);
    setError("Unable to load category data.");
  })
  .finally(() => setLoading(false));

}, []);

return (
<div className="mt-6 rounded-xl bg-slate-800 p-5">
<h2 className="mb-4 text-xl font-bold text-white">
Product Category Analytics
</h2>

  {loading ? (
    <p className="text-cyan-400">Loading category data...</p>
  ) : error ? (
    <p className="text-red-400">{error}</p>
  ) : data.length === 0 ? (
    <p className="text-gray-400">No category data available.</p>
  ) : (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={110}
          dataKey="value"
          nameKey="name"
          label={({ name }) => name}
        >
          {data.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip
          formatter={(value) => [
            `${Number(value).toLocaleString("en-US")} units`,
            "Quantity",
          ]}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )}
</div>

);
}

export default RegionChart;