import GlobalKPICards from "./GlobalKPICards";
import WorldSalesChart from "./WorldSalesChart";
import ContinentPerformance from "./ContinentPerformance";
import TopGlobalCountries from "./TopGlobalCountries";
import GlobalInsights from "./GlobalInsights";
import GlobalFilter from "./GlobalFilter";
import WorldMap from "./WorldMap";
function GlobalOverview() {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        🌍 Global Overview
      </h1>

      <p className="text-gray-400 mb-6">
        Worldwide Sales, Revenue, Products and Country Analytics
      </p>

      <GlobalKPICards />
      <GlobalInsights />
      <GlobalFilter />
      <WorldSalesChart />
      <ContinentPerformance />
      <TopGlobalCountries />
      <WorldMap />
    </div>
  );
}

export default GlobalOverview;