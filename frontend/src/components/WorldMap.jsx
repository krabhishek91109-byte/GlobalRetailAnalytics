import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const API_URL = `${import.meta.env.VITE_API_URL}/country-sales`;

// Match different spellings of country names
const countryAliases = {
  "united states of america": "united states",
  "usa": "united states",
  "russian federation": "russia",
  "republic of korea": "south korea",
  "democratic people's republic of korea": "north korea",
  "iran (islamic republic of)": "iran",
  "syrian arab republic": "syria",
  "venezuela (bolivarian republic of)": "venezuela",
  "bolivia (plurinational state of)": "bolivia",
  "tanzania, united republic of": "tanzania",
  "moldova, republic of": "moldova",
  "lao people's democratic republic": "laos",
  "viet nam": "vietnam",
  "côte d'ivoire": "ivory coast",
  "czechia": "czech republic",
  "brunei darussalam": "brunei",
  "taiwan, province of china": "taiwan",
};

const normalizeCountry = (name = "") => {
  const normalized = name.trim().toLowerCase();
  return countryAliases[normalized] || normalized;
};

function WorldMap() {
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load country sales data");
        }
        return response.json();
      })
      .then((result) => {
        setCountryData(Array.isArray(result) ? result : []);
        setError("");
      })
      .catch((err) => {
        console.error("Country sales API error:", err);
        setError("Unable to load country sales data.");
      })
      .finally(() => setLoading(false));
  }, []);

  const findCountry = (name) =>
    countryData.find(
      (item) =>
        normalizeCountry(item.country) === normalizeCountry(name)
    );

  const filteredCountry = countryData.find((item) =>
    String(item.country || "")
      .toLowerCase()
      .includes(search.trim().toLowerCase())
  );

  const formatMoney = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(Number(value) || 0);

  return (
    <div className="bg-slate-800 rounded-xl p-6 mt-6">
      <h2 className="text-xl font-bold text-white mb-4">
        🌍 World Sales Map
      </h2>

      <input
        type="text"
        placeholder="🔍 Search Country..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSelectedCountry(null);
        }}
        className="w-full mb-4 p-3 rounded-lg bg-slate-700 text-white border border-cyan-500 outline-none"
      />

      {loading && (
        <p className="text-cyan-400 mb-4">
          Loading real country sales data...
        </p>
      )}

      {error && <p className="text-red-400 mb-4">{error}</p>}

      {!loading && !error && (
        <p className="text-gray-300 text-sm mb-3">
          Countries loaded: {countryData.length}
        </p>
      )}

      <div className="w-full overflow-hidden">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 150 }}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const mapName = geo.properties.name;
                const actualData = findCountry(mapName);

                const isSelected =
                  selectedCountry &&
                  normalizeCountry(selectedCountry.country) ===
                    normalizeCountry(actualData?.country || "");

                const isSearchMatch =
                  search.trim() &&
                  normalizeCountry(mapName).includes(
                    normalizeCountry(search)
                  );

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      if (actualData) {
                        setSelectedCountry(actualData);
                        setSearch(actualData.country);
                      } else {
                        setSelectedCountry({
                          country: mapName,
                          revenue: null,
                          orders: null,
                          profit: null,
                        });
                        setSearch(mapName);
                      }
                    }}
                    style={{
                      default: {
                        fill: isSelected
                          ? "#facc15"
                          : isSearchMatch
                          ? "#10b981"
                          : actualData
                          ? "#22d3ee"
                          : "#334155",
                        stroke: "#0f172a",
                        strokeWidth: 0.4,
                        outline: "none",
                      },
                      hover: {
                        fill: "#06b6d4",
                        cursor: "pointer",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#0891b2",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {search.trim() && filteredCountry && !selectedCountry && (
        <button
          onClick={() => {
            setSelectedCountry(filteredCountry);
            setSearch(filteredCountry.country);
          }}
          className="mb-4 px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500"
        >
          View {filteredCountry.country} sales
        </button>
      )}

      {selectedCountry && (
        <div className="mt-6 p-6 bg-slate-700 rounded-xl border border-cyan-500">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">
            🌍 {selectedCountry.country}
          </h3>

          {selectedCountry.revenue == null ? (
            <p className="text-yellow-300">
              Sales Data Not Available for this country.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400">Revenue</p>
                <h2 className="text-cyan-400 text-xl font-bold">
                  {formatMoney(selectedCountry.revenue)}
                </h2>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400">Orders</p>
                <h2 className="text-green-400 text-xl font-bold">
                  {Number(selectedCountry.orders || 0).toLocaleString("en-US")}
                </h2>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg">
                <p className="text-gray-400">Profit</p>
                <h2 className="text-pink-400 text-xl font-bold">
                  {formatMoney(selectedCountry.profit)}
                </h2>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default WorldMap;