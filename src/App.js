import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Proudacts from "./components/Proudacts/proudacts";
import myContext from "./MyContext";
function App() {
  let [shopingCart, setCart] = useState([]);
  let [ShopList, setFullList] = useState([]);
  const [FilteredList, setList] = useState(ShopList);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((list) => {
        setFullList(list);
        setList(list);
      });
  }, []);
  const categories = ShopList.map((p) => p.category).filter(
    (value, index, array) => array.indexOf(value) === index
  );
  const FilterList = (op) => {
    if (op === "All") setList(ShopList);
    else setList(ShopList.filter((item) => item.category === op));
  };
  return (
    <myContext.Provider value={[shopingCart, setCart]}>
      <div className="App">
        <Header list={categories} OnFilter={FilterList} />
        <Cart />
        <Proudacts list={FilteredList} />
      </div>
    </myContext.Provider>
  );
}

export default App;
