import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { state: "Maharashtra", revenue: 18, profit: 5 },
  { state: "Karnataka", revenue: 15, profit: 4 },
  { state: "Gujarat", revenue: 13, profit: 3.5 },
  { state: "Madhya Pradesh", revenue: 11, profit: 3 },
  { state: "Tamil Nadu", revenue: 10, profit: 2.8 },
  { state: "Bihar", revenue: 9, profit: 2.4 },
  { state: "Jharkhand", revenue: 8, profit: 2.1 },
];

function RevenueProfitChart() {
  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        💰 Revenue vs Profit
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="state" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Legend />

          <Bar dataKey="revenue" fill="#06B6D4" />
          <Bar dataKey="profit" fill="#22C55E" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueProfitChart;