import { useEffect, useState } from "react";

function TopGlobalCountries({ search = "" }) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("${import.meta.env.VITE_API_URL}/country-sales")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load country data");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(Array.isArray(data) ? data : []);
        setError("");
      })
      .catch((err) => {
        console.error("Country data error:", err);
        setError("Unable to load country data.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredCountries = countries.filter((country) =>
    String(country.country || "")
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🌍 Global Country Analytics
      </h2>

      <input
        type="text"
        value={search}
        readOnly
        placeholder="Search country from the dashboard search box..."
        className="w-full mb-4 rounded-lg bg-slate-700 px-4 py-3 text-white"
      />

      {loading ? (
        <p className="text-gray-400">Loading country data...</p>
      ) : error ? (
        <p className="text-red-400">{error}</p>
      ) : filteredCountries.length === 0 ? (
        <p className="text-gray-400">No matching country found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-600 text-gray-300">
                <th className="p-3">Country</th>
                <th className="p-3">Revenue (USD)</th>
                <th className="p-3">Orders</th>
                <th className="p-3">Profit (USD)</th>
              </tr>
            </thead>

            <tbody>
              {filteredCountries.map((country) => (
                <tr
                  key={country.country}
                  className="border-b border-slate-700 hover:bg-slate-700"
                >
                  <td className="p-3 text-white">{country.country}</td>
                  <td className="p-3 text-cyan-400">
                    ${Number(country.revenue || 0).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="p-3">
                    {Number(country.orders || 0).toLocaleString("en-US")}
                  </td>
                  <td className="p-3 text-green-400">
                    ${Number(country.profit || 0).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default TopGlobalCountries;