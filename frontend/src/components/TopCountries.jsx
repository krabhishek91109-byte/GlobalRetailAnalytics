function TopCountries() {
  const countries = [
    { flag: "🇮🇳", name: "India", revenue: "$4.8M", growth: "+12%" },
    { flag: "🇺🇸", name: "USA", revenue: "$3.9M", growth: "+9%" },
    { flag: "🇬🇧", name: "UK", revenue: "$2.4M", growth: "+7%" },
    { flag: "🇦🇪", name: "UAE", revenue: "$1.8M", growth: "+5%" },
    { flag: "🇨🇦", name: "Canada", revenue: "$1.2M", growth: "+4%" },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🌍 Top Countries
      </h2>

      {countries.map((country, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 border-b border-slate-700 hover:bg-slate-700 rounded-lg px-2 transition"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{country.flag}</span>
            <span className="text-white font-medium">{country.name}</span>
          </div>

          <div className="text-right">
            <p className="text-cyan-400 font-bold">{country.revenue}</p>
            <p className="text-green-400 text-sm">{country.growth}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopCountries;