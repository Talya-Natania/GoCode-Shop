import CartProduct from "../CartProduct/CartProduct";
import MyContext from "../../MyContext";
import { useContext } from "react";
function Cart() {
  const [shopingCart, setCart] = useContext(MyContext);
  return (
    <>
      <div>My Cart</div>
      <div>{shopingCart.length}</div>
      <section>
        {shopingCart.map((item) => (
          <CartProduct titel={item.titel} />
        ))}
      </section>
    </>
  );
}
export default Cart;
