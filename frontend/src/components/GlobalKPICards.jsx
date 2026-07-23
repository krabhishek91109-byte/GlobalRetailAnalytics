function GlobalKPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">🌍 Countries</h3>
        <p className="text-3xl font-bold text-cyan-400 mt-2">125</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">🌎 Continents</h3>
        <p className="text-3xl font-bold text-green-400 mt-2">6</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">💰 Global Revenue</h3>
        <p className="text-3xl font-bold text-yellow-400 mt-2">$24.8M</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">📦 Global Orders</h3>
        <p className="text-3xl font-bold text-pink-400 mt-2">2.48M</p>
      </div>

    </div>
  );
}

export default GlobalKPICards;