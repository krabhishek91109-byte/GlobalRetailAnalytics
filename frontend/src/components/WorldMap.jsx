import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function WorldMap() {
const [selectedCountry, setSelectedCountry] = useState("");
const [sales, setSales] = useState("");
const [orders, setOrders] = useState("");
const [profit, setProfit] = useState("");
const [search, setSearch] = useState("");
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
  setSelectedCountry(e.target.value);
}}
  className="w-full mb-4 p-3 rounded-lg bg-slate-700 text-white border border-cyan-500 outline-none"
/>
      <ComposableMap
      projection="geoEqualEarth"
        projectionConfig={{ scale: 170 }}
        style={{ width: "100%", height: "600px" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}

                onMouseEnter={() => console.log(geo.properties.name)}
                 onClick={() => {
                setSelectedCountry(geo.properties.name);
           setSales(`$${(Math.random() * 10 + 1).toFixed(1)}M`);
           setOrders(Math.floor(Math.random() * 50000));
          setProfit(`$${(Math.random() * 5 + 1).toFixed(1)}M`);
               }}
                style={{
                  default: {
                 fill:
                  selectedCountry.toLowerCase() === geo.properties.name.toLowerCase()
                       ? "#facc15"
                       : "#22d3ee",
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
            ))
          }
        </Geographies>
      </ComposableMap>
     {selectedCountry && (
  <div className="mt-6 p-6 bg-slate-700 rounded-xl border border-cyan-500">

    <h3 className="text-2xl font-bold text-cyan-400 mb-4">
      🌍 {selectedCountry}
    </h3>

    <div className="grid grid-cols-3 gap-4">

      <div className="bg-slate-800 p-4 rounded-lg">
        <p className="text-gray-400">Revenue</p>
        <h2 className="text-cyan-400 text-2xl font-bold">{sales}</h2>
      </div>

      <div className="bg-slate-800 p-4 rounded-lg">
        <p className="text-gray-400">Orders</p>
        <h2 className="text-green-400 text-2xl font-bold">{orders}</h2>
      </div>

      <div className="bg-slate-800 p-4 rounded-lg">
        <p className="text-gray-400">Profit</p>
        <h2 className="text-pink-400 text-2xl font-bold">{profit}</h2>
      </div>

    </div>

  </div>
)}
    </div>
  );
}

export default WorldMap;