function GlobalInsights() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-5">
        💡 Global Business Insights
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-cyan-400 font-semibold">
            📈 Best Performing Market
          </h3>
          <p className="text-gray-300 mt-2">
            Global market performance will be calculated from the connected
            global sales data.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold">
            💰 Highest Revenue
          </h3>
          <p className="text-gray-300 mt-2">
            Highest revenue country will be displayed from actual global data.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-yellow-400 font-semibold">
            📦 Fastest Growing Region
          </h3>
          <p className="text-gray-300 mt-2">
            Regional growth will be calculated from the global sales dataset.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-pink-400 font-semibold">
            🎯 Recommendation
          </h3>
          <p className="text-gray-300 mt-2">
            Business recommendations will be generated from actual sales
            performance.
          </p>
        </div>

      </div>
    </div>
  );
}

export default GlobalInsights;