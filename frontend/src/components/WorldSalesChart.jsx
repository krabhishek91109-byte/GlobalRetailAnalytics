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
  const data = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 14500 },
    { month: "Mar", sales: 16800 },
    { month: "Apr", sales: 18200 },
    { month: "May", sales: 21000 },
    { month: "Jun", sales: 23500 },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🌎 World Sales Overview
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#22d3ee"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default WorldSalesChart;