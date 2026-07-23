function Header({ search, setSearch }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-4xl font-bold">
          Global Retail Analytics Dashboard
        </h2>

        <p className="text-gray-400 mt-2">
          Welcome to Real-Time Sales & Business Intelligence Dashboard
        </p>
      </div>

      <input
  type="text"
  placeholder="Search..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="bg-slate-800 text-white px-4 py-2 rounded-lg outline-none w-64"
/>
    </div>
  );
}

export default Header;