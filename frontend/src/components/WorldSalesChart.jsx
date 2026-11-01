import { useEffect, useState } from "react";
import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
ResponsiveContainer,
} from "recharts";

function WorldSalesChart() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch("http://127.0.0.1:8000/dashboard-data")
.then((res) => {
if (!res.ok) {
throw new Error("Failed to load dashboard data");
}
return res.json();
})
.then((result) => {
console.log("World chart data:", result.monthly_sales);
setData(
(result.monthly_sales || []).map((item) => ({
year: item.month,
sales: Number(item.sales || 0),
}))
);
})
.catch((error) => {
console.error("Error loading world sales chart:", error);
})
.finally(() => setLoading(false));
}, []);

return (
<div className="bg-slate-800 rounded-xl p-6 mt-6">
<h2 className="text-xl font-bold text-white mb-4">
🌎 World Sales Overview
</h2>

  {loading ? (
    <p className="text-gray-400">Loading sales data...</p>
  ) : data.length === 0 ? (
    <p className="text-gray-400">No sales data available.</p>
  ) : (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid
          stroke="#334155"
          strokeDasharray="3 3"
        />

        <XAxis dataKey="year" stroke="#94a3b8" />
<YAxis
  width={85}
  stroke="#94a3b8"
  tickFormatter={(value) =>
    Number(value).toLocaleString("en-US")
  }
/>

        <Tooltip
          formatter={(value) => [
            `₹${Number(value).toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}`,
            "Sales",
          ]}
        />

        <Line
          type="monotone"
          dataKey="sales"
          name="Global Sales"
          stroke="#22d3ee"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )}
</div>

);
}

export default WorldSalesChart;