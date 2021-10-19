import MyContext from "../../MyContext";
import { useContext } from "react";
import "./Proudact.css";
function Proudact({ im, titel, price }) {
  const [shopingCart, setCart] = useContext(MyContext);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={im} alt="description" />
      </div>
      <div className="product-info">
        <h5>{titel}</h5>
        <h6>{price}$</h6>
        <button onClick={() => setCart([...shopingCart, { im, titel, price }])}>
          +
        </button>
        <button
          onClick={() =>
            setCart(shopingCart.filter((item) => item.titel !== titel))
          }
        >
          -
        </button>
      </div>
    </div>
  );
}
export default Proudact;
