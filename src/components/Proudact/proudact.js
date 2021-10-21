import MyContext from "../../MyContext";
import { useContext } from "react";
import "./Proudact.css";
function Proudact({ im, title, price, id }) {
  const [addItem, removeItem] = useContext(MyContext);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={im} alt="description" />
      </div>
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
