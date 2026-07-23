import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ContinentPerformance() {
  const data = [
    { continent: "Asia", sales: 420 },
    { continent: "Europe", sales: 310 },
    { continent: "North America", sales: 280 },
    { continent: "South America", sales: 180 },
    { continent: "Africa", sales: 140 },
    { continent: "Australia", sales: 90 },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🌍 Continent Performance
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="continent" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Bar dataKey="sales" fill="#22d3ee" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ContinentPerformance;