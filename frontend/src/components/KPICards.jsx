import { useEffect, useState } from "react";

function KPICards() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, []);

  const totalOrders = sales.length;
  const totalRevenue = sales.reduce(
    (sum, item) => sum + Number(item.Total_Amount || 0),
    0
  );
  const totalQuantity = sales.reduce(
    (sum, item) => sum + Number(item.Quantity || 0),
    0
  );
  const totalCustomers = new Set(
    sales.map((item) => `${item.Gender}-${item.Age}`)
  ).size;

  return (
    <div className="grid grid-cols-4 gap-6">

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">Total Sales</h3>
        <p className="text-3xl font-bold mt-2">{totalQuantity}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">Revenue</h3>
        <p className="text-3xl font-bold mt-2">₹{totalRevenue.toFixed(2)}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">Orders</h3>
        <p className="text-3xl font-bold mt-2">{totalOrders}</p>
      </div>

      <div className="bg-slate-800 rounded-xl p-5">
        <h3 className="text-gray-400">Customers</h3>
        <p className="text-3xl font-bold mt-2">{totalCustomers}</p>
      </div>

    </div>
  );
}

export default KPICards;