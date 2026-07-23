import IndiaSalesChart from "./IndiaSalesChart";
import IndiaStateChart from "./IndiaStateChart";
import TopStatesTable from "./TopStatesTable";
import RevenueProfitChart from "./RevenueProfitChart";
function IndiaAnalytics() {
  return (
    <div className="text-white">

      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        🗺️ India Analytics
      </h1>

      <p className="text-gray-400">
        State-wise sales, revenue, profit and business insights across India.
      </p>

<div className="grid grid-cols-4 gap-6 mt-8">

  <div className="bg-slate-800 p-5 rounded-xl">
    <p className="text-gray-400">Revenue</p>
    <h2 className="text-3xl font-bold text-cyan-400">₹82 Cr</h2>
  </div>

  <div className="bg-slate-800 p-5 rounded-xl">
    <p className="text-gray-400">Orders</p>
    <h2 className="text-3xl font-bold text-green-400">1,24,850</h2>
  </div>

  <div className="bg-slate-800 p-5 rounded-xl">
    <p className="text-gray-400">Profit</p>
    <h2 className="text-3xl font-bold text-pink-400">₹18 Cr</h2>
  </div>

  <div className="bg-slate-800 p-5 rounded-xl">
    <p className="text-gray-400">States</p>
    <h2 className="text-3xl font-bold text-yellow-400">28</h2>
  </div>

</div>
<IndiaSalesChart />
<IndiaStateChart />
<TopStatesTable />
<RevenueProfitChart />
    </div>
  );
}

export default IndiaAnalytics;