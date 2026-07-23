import { useEffect, useState } from "react";

function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((sales) => {
        const productMap = {};

        sales.forEach((item) => {
          const product = item.Product_Category || "Other";

          productMap[product] =
            (productMap[product] || 0) + Number(item.Quantity ||  0);
        });

        const sortedProducts = Object.keys(productMap)
          .map((key) => ({
            name: key,
            sales: productMap[key],
          }))
          .sort((a, b) => b.sales - a.sales)
          .slice(0, 5);

        setProducts(sortedProducts);
      });
  }, []);

  return (
    <div className="bg-slate-800 p-5 rounded-xl mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🏆 Top Selling Categories
      </h2>

      {products.map((product, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-3 border-b border-slate-700"
        >
          <span className="text-cyan-300 font-semibold">
            {product.name}
          </span>

          <span className="text-cyan-400 font-bold">
            {product.sales} Units
          </span>
        </div>
      ))}
    </div>
  );
}

export default TopProducts;