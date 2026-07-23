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
            Asia contributes the highest global sales with strong year-over-year growth.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-green-400 font-semibold">
            💰 Highest Revenue
          </h3>
          <p className="text-gray-300 mt-2">
            USA generated the highest revenue of $8.4M during this period.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-yellow-400 font-semibold">
            📦 Fastest Growing Region
          </h3>
          <p className="text-gray-300 mt-2">
            Europe recorded the fastest growth in customer orders this quarter.
          </p>
        </div>

        <div className="bg-slate-700 rounded-lg p-4">
          <h3 className="text-pink-400 font-semibold">
            🎯 Recommendation
          </h3>
          <p className="text-gray-300 mt-2">
            Focus marketing investment on Asia and Europe to maximize future revenue.
          </p>
        </div>

      </div>
    </div>
  );
}

export default GlobalInsights;