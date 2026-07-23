const states = [
  { state: "Maharashtra", revenue: "₹18 Cr", orders: "28,500", profit: "₹5 Cr" },
  { state: "Karnataka", revenue: "₹15 Cr", orders: "24,300", profit: "₹4 Cr" },
  { state: "Gujarat", revenue: "₹13 Cr", orders: "20,100", profit: "₹3.5 Cr" },
  { state: "Madhya Pradesh", revenue: "₹11 Cr", orders: "18,200", profit: "₹3 Cr" },
  { state: "Tamil Nadu", revenue: "₹10 Cr", orders: "17,400", profit: "₹2.8 Cr" },
  { state: "Bihar", revenue: "₹9 Cr", orders: "15,800", profit: "₹2.4 Cr" },
  { state: "Jharkhand", revenue: "₹8 Cr", orders: "14,200", profit: "₹2.1 Cr" },
];

function TopStatesTable() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🏆 Top Performing States
      </h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-cyan-400 border-b border-slate-600">
            <th className="py-3">State</th>
            <th>Revenue</th>
            <th>Orders</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {states.map((item, index) => (
            <tr
              key={index}
              className="border-b border-slate-700 hover:bg-slate-700"
            >
              <td className="py-3">{item.state}</td>
              <td>{item.revenue}</td>
              <td>{item.orders}</td>
              <td>{item.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopStatesTable;