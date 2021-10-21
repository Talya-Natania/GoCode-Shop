import "./CartProduct.css";
function CartProduct({ title, qty }) {
  return (
    <div>
      {title}:{qty}
    </div>
  );
}
export default CartProduct;
