import Proudact from "../Proudact/proudact";
import "./Proudacts.css";
function Proudacts({ list }) {
  return (
    <section className="products">
      {list.map((item) => (
        <Proudact
          im={item.image}
          title={item.title}
          price={item.price}
          id={item.id}
        />
      ))}
    </section>
  );
}
export default Proudacts;
