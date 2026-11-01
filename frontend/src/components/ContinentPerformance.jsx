import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ContinentPerformance({ data = [] }) {
  const regionSales = Object.values(
    data.reduce((result, item) => {
      const region = item.Region;
      const sales = Number(item.Sales || 0);

      if (!region) return result;

      if (!result[region]) {
        result[region] = {
          region,
          sales: 0,
        };
      }

      result[region].sales += sales;

      return result;
    }, {})
  ).sort((a, b) => b.sales - a.sales);

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🌍 Regional Sales Performance
      </h2>

      {regionSales.length === 0 ? (
        <p className="text-gray-400">
          No regional sales data available.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={regionSales}>
            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="region"
              stroke="#94a3b8"
              interval={0}
              angle={-15}
              textAnchor="end"
              height={65}
            />

            <YAxis
              width={85}
              stroke="#94a3b8"
              tickFormatter={(value) =>
                Number(value).toLocaleString("en-US")
              }
            />

            <Tooltip
              formatter={(value) => [
                Number(value).toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                }),
                "Sales",
              ]}
            />

            <Bar
              dataKey="sales"
              name="Sales"
              fill="#22d3ee"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ContinentPerformance;