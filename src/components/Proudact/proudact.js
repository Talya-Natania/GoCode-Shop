import "./Proudact.css";
function Proudact({ im, titel, price }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={im} alt="description" />
      </div>
      <div className="product-info">
        <h5>{titel}</h5>
        <h6>{price}$</h6>
      </div>
    </div>
  );
}
export default Proudact;
