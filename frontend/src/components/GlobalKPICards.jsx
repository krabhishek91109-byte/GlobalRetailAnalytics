function GlobalKPICards({ data = [] }) {
  const totalRevenue = data.reduce(
    (sum, item) => sum + Number(item.Sales || 0),
    0
  );

  const totalOrders = new Set(
    data.map((item) => item.Order_ID).filter(Boolean)
  ).size;

  const totalCountries = new Set(
    data.map((item) => item.Country).filter(Boolean)
  ).size;

  const totalRegions = new Set(
    data.map((item) => item.Region).filter(Boolean)
  ).size;

  const cards = [
    {
      title: "Countries",
      value: totalCountries.toLocaleString("en-US"),
      color: "text-cyan-400",
      icon: "🌍",
    },
    {
      title: "Regions",
      value: totalRegions.toLocaleString("en-US"),
      color: "text-green-400",
      icon: "🌎",
    },
    {
      title: "Total Revenue (USD)",
      value: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(totalRevenue),
      color: "text-yellow-400",
      icon: "💰",
    },
    {
      title: "Total Orders",
      value: totalOrders.toLocaleString("en-US"),
      color: "text-pink-400",
      icon: "📦",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="rounded-xl bg-slate-800 p-5">
          <h3 className="text-gray-400">
            {card.icon} {card.title}
          </h3>

          <p className={`mt-2 text-3xl font-bold ${card.color}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default GlobalKPICards;