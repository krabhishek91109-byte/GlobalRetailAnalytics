function GlobalFilter({
year,
setYear,
region,
setRegion,
category,
setCategory,
}) {
return (
<div className="bg-slate-800 rounded-xl p-5 mt-6 flex gap-4 flex-wrap">
{/* Year Filter */}
<select
value={year}
onChange={(e) => setYear(e.target.value)}
className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:border-cyan-400"
>
<option value="All Years">All Years</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
</select>

  {/* Region Filter */}
  <select
    value={region}
    onChange={(e) => setRegion(e.target.value)}
    className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:border-cyan-400"
  >
    <option value="All Regions">All Regions</option>
    <option value="West">West</option>
    <option value="East">East</option>
    <option value="Central">Central</option>
    <option value="South">South</option>
  </select>

  {/* Category Filter */}
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:outline-none focus:border-cyan-400"
  >
    <option value="All Categories">All Categories</option>
    <option value="Furniture">Furniture</option>
    <option value="Office Supplies">Office Supplies</option>
    <option value="Technology">Technology</option>
  </select>

  {/* Reset Filters */}
  <button
    type="button"
    onClick={() => {
      setYear("All Years");
      setRegion("All Regions");
      setCategory("All Categories");
    }}
    className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg transition-colors"
  >
    Reset Filters
  </button>
</div>

);
}

export default GlobalFilter;