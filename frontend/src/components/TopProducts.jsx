import { useEffect, useState } from "react";

function TopProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("${import.meta.env.VITE_API_URL}/sales?limit=5000")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch sales data");
        }
        return res.json();
      })
      .then((sales) => {
        const categoryMap = {};

        sales.forEach((item) => {
          const category = item.Category || item.Product_Category;

          if (!category) return;

          categoryMap[category] =
            (categoryMap[category] || 0) + Number(item.Quantity || 0);
        });

        const sortedCategories = Object.entries(categoryMap)
          .map(([name, quantity]) => ({
            name,
            sales: quantity,
          }))
          .sort((a, b) => b.sales - a.sales)
          .slice(0, 5);

        setProducts(sortedCategories);
      })
      .catch((err) => {
        console.error("Error loading categories:", err);
        setError("Unable to load product categories.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mt-6 rounded-xl bg-slate-800 p-5">
      <h2 className="mb-4 text-xl font-bold text-white">
        🏆 Top Selling Categories
      </h2>

      {loading ? (
        <p className="text-cyan-400">Loading categories...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : products.length === 0 ? (
        <p className="text-gray-400">No category data available.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between border-b border-slate-700 py-3"
          >
            <span className="font-semibold text-cyan-300">
              {product.name}
            </span>

            <span className="font-bold text-cyan-400">
              {product.sales.toLocaleString("en-US")} Units
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default TopProducts;