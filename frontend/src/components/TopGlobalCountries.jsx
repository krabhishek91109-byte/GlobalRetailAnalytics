function TopGlobalCountries() {
  const countries = [
  { country: "🔵 USA", revenue: "$8.4M" },
  { country: "🟠 India", revenue: "$6.9M" },
  { country: "🟢 UK", revenue: "$5.2M" },
  { country: "🟣 Germany", revenue: "$4.8M" },
  { country: "🔴 Japan", revenue: "$4.1M" },
];
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🏆 Top Global Countries
      </h2>

      {countries.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 border-b border-slate-700"
        >
          <span className="font-medium">{item.country}</span>
          <span className="text-cyan-400 font-bold">{item.revenue}</span>
        </div>
      ))}
    </div>
  );
}

export default TopGlobalCountries;