function Sidebar({ page, setPage }) {
  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 p-6">

      <h1 className="text-2xl font-bold text-cyan-400 mb-10">
        🌍 Global Retail
      </h1>

      <ul className="space-y-4 text-gray-300">

   <li
  onClick={() => setPage("dashboard")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "dashboard"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  🏠 Dashboard
</li>
        <li
  onClick={() => setPage("global")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "global"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  🌍 Global Overview
</li>

 <li
  onClick={() => setPage("india")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "india"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  🗺 India Analytics
</li>      

       <li
  onClick={() => setPage("country")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "country"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  🌎 Country Analytics
</li>
        <li
  onClick={() => setPage("kpi")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "kpi"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  📊 KPI Cards
</li>
        
        <li
  onClick={() => setPage("sales")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "sales"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  📈 Sales Trends
</li>

        <li
  onClick={() => setPage("revenue")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "revenue"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  💰 Revenue & Profit
</li>
        <li
  onClick={() => setPage("customer")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "customer"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  👥 Customer Insights
</li>
       <li
  onClick={() => setPage("product")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "product"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  📦 Product Performance
</li>
       
      <li
  onClick={() => setPage("export")}
  className={`p-3 rounded-lg cursor-pointer ${
    page === "export"
      ? "bg-cyan-600 text-white"
      : "hover:bg-slate-800 text-gray-300"
  }`}
>
  📄 Export Reports
</li>
      </ul>

    </div>
  );
}

export default Sidebar;