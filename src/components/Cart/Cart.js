import CartProduct from "../CartProduct/CartProduct";
import MyContext from "../../MyContext";
import { useContext } from "react";
function Cart() {
  const [shopingCart] = useContext(MyContext);
  return (
    <>
      <div>My Cart</div>
      <div>{shopingCart.length}</div>
      <section>
        {shopingCart.map((item) => (
          <CartProduct key={item.id} title={item.title} qty={item.qty} />
        ))}
      </section>
    </>
  );
}
export default Cart;
