import Proudact from "../Proudact/proudact";
import "./Proudacts.css";
function Proudacts({ list }) {
  return (
    <section className="products">
      {list.map((item) => (
        <Proudact im={item.image} titel={item.title} price={item.price} />
      ))}
    </section>
  );
}
export default Proudacts;
