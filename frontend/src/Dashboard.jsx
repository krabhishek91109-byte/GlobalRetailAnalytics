import { useState } from "react";
import CustomerInsights from "./components/CustomerInsights";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPICards from "./components/KPICards";
import SalesCharts from "./components/SalesCharts";
import RevenueChart from "./components/RevenueChart";
import RegionChart from "./components/RegionChart";
import RecentOrders from "./components/RecentOrders";
import TopProducts from "./components/TopProducts";
import TopCountries from "./components/TopCountries";
import GlobalOverview from "./components/GlobalOverview";
import IndiaAnalytics from "./components/IndiaAnalytics";
import ExportReports from "./components/ExportReports";

function Dashboard() {
  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar page={page} setPage={setPage} />

      <div className="flex-1 p-8">
        {page === "dashboard" && (
          <>
            <Header search={search} setSearch={setSearch} />
            <KPICards />
            <CustomerInsights />
            <SalesCharts />
            <RevenueChart />
            <RegionChart />
            <RecentOrders search={search} />
            <TopProducts />
            <TopCountries />
          </>
        )}
        {page === "global" && <GlobalOverview />}
        {page === "india" && <IndiaAnalytics />}

{page === "country" && <TopCountries />}

{page === "kpi" && <KPICards />}

{page === "sales" && <SalesCharts />}

{page === "revenue" && <RevenueChart />}

{page === "customer" && <CustomerInsights />}

{page === "product" && <TopProducts />}

{page === "export" && <ExportReports />}

    
      </div>
    </div>
  );
}

export default Dashboard;