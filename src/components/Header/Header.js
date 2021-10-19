import "./Header.css";
function Header({ list, OnFilter }) {
  return (
    <nav className="product-filter">
      <h1>Jackets </h1>
      <div className="collection-sort">
        <label>Filter by:</label>
        <select onChange={(e) => OnFilter(e.target.value)}>
          <option key="All">All</option>
          {list.map((op) => (
            <option key={op}>{op}</option>
          ))}
        </select>
      </div>
      <div className="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </nav>
  );
}
export default Header;
