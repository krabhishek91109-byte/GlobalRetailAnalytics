function GlobalFilter() {
  return (
    <div className="bg-slate-800 rounded-xl p-5 mt-6 flex gap-4 flex-wrap">

      <select className="bg-slate-700 text-white px-4 py-2 rounded-lg">
        <option>2026</option>
        <option>2025</option>
        <option>2024</option>
      </select>

      <select className="bg-slate-700 text-white px-4 py-2 rounded-lg">
        <option>All Regions</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>North America</option>
        <option>South America</option>
      </select>

      <select className="bg-slate-700 text-white px-4 py-2 rounded-lg">
        <option>All Categories</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Furniture</option>
      </select>

    </div>
  );
}

export default GlobalFilter;