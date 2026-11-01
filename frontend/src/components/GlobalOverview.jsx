import { useEffect, useState } from "react";

import GlobalKPICards from "./GlobalKPICards";
import WorldSalesChart from "./WorldSalesChart";
import ContinentPerformance from "./ContinentPerformance";
import TopGlobalCountries from "./TopGlobalCountries";
import GlobalInsights from "./GlobalInsights";
import GlobalFilter from "./GlobalFilter";
import WorldMap from "./WorldMap";

function GlobalOverview() {
const [salesData, setSalesData] = useState([]);
const [year, setYear] = useState("All Years");
const [region, setRegion] = useState("All Regions");
const [category, setCategory] = useState("All Categories");
const [countrySearch, setCountrySearch] = useState("");
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
fetch("${import.meta.env.VITE_API_URL}/sales?limit=5000&skip=0")
.then((response) => {
if (!response.ok) {
throw new Error("Failed to load sales data");
}
return response.json();
})
.then((data) => {
setSalesData(Array.isArray(data) ? data : []);
setError("");
})
.catch((err) => {
console.error("Error loading sales data:", err);
setError("Unable to load sales data. Please check the backend.");
})
.finally(() => {
setLoading(false);
});
}, []);

const filteredData = salesData.filter((item) => {
const yearMatch =
year === "All Years" || String(item.Year) === year;

const regionMatch =
  region === "All Regions" || item.Region === region;

const categoryMatch =
  category === "All Categories" || item.Category === category;

const countryMatch =
  !countrySearch.trim() ||
  String(item.Country || "")
    .toLowerCase()
    .includes(countrySearch.trim().toLowerCase());

return yearMatch && regionMatch && categoryMatch && countryMatch;

});

return (
<div className="text-white">
<h1 className="text-3xl font-bold text-cyan-400 mb-6">
Global Overview
</h1>

  <p className="text-gray-400 mb-6">
    Worldwide Sales, Revenue, Products and Country Analytics
  </p>

  <div className="mb-6">
    <label className="block text-gray-300 mb-2">
      Search Country
    </label>

    <input
      type="text"
      placeholder="Enter country name..."
      value={countrySearch}
      onChange={(event) => setCountrySearch(event.target.value)}
      className="w-full md:w-80 bg-slate-800 border border-slate-600 text-white px-4 py-2 rounded-lg outline-none focus:border-cyan-400"
    />

    {countrySearch && (
      <button
        type="button"
        onClick={() => setCountrySearch("")}
        className="ml-3 text-cyan-400 hover:text-cyan-300"
      >
        Clear Search
      </button>
    )}
  </div>

  <GlobalFilter
    year={year}
    setYear={setYear}
    region={region}
    setRegion={setRegion}
    category={category}
    setCategory={setCategory}
  />

  {loading ? (
    <p className="mt-6 text-gray-300">Loading sales data...</p>
  ) : error ? (
    <p className="mt-6 text-red-400">{error}</p>
  ) : (
    <>
      <p className="mt-4 text-sm text-gray-400">
        Showing {filteredData.length.toLocaleString("en-US")} of{" "}
        {salesData.length.toLocaleString("en-US")} loaded records
      </p>

      {filteredData.length === 0 ? (
        <div className="mt-6 rounded-xl bg-slate-800 p-6">
          <p className="text-yellow-400">
            No records match these filters. Try Reset Filters or clear
            the country search.
          </p>
        </div>
      ) : (
        <>
          <GlobalKPICards data={filteredData} />

          <GlobalInsights data={filteredData} />

          <WorldSalesChart data={filteredData} />

          <ContinentPerformance data={filteredData} />

          <TopGlobalCountries data={filteredData} />

          <WorldMap data={filteredData} />
        </>
      )}
    </>
  )}
</div>

);
}

export default GlobalOverview;