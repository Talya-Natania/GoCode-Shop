import myContext from "../../MyContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Proudact.css";
function Proudact({ im, title, price, id }) {
  const [shopingCart, addItem, removeItem] = useContext(myContext);
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <div className="product-image">
          <img src={im} alt="description" />
        </div>
      </Link>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
        <button onClick={() => addItem(im, title, price, id)}>+</button>
        <button onClick={() => removeItem(id)}> -</button>
      </div>
    </div>
  );
}
export default Proudact;
