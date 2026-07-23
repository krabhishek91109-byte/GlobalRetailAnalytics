import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { state: "Maharashtra", sales: 18 },
  { state: "Karnataka", sales: 15 },
  { state: "Gujarat", sales: 13 },
  { state: "Madhya Pradesh", sales: 11 },
  { state: "Tamil Nadu", sales: 10 },
  { state: "Bihar", sales: 9 },
  { state: "Jharkhand", sales: 8 },
  { state: "Delhi", sales: 7 },
  { state: "Uttar Pradesh", sales: 6 },
  { state: "Rajasthan", sales: 5 },
];

function IndiaStateChart() {
  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        📊 India State Sales
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="state" stroke="#94A3B8" angle={-20} textAnchor="end" height={80} />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Bar dataKey="sales" fill="#06B6D4" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default IndiaStateChart;