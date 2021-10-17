import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Proudacts from "./components/Proudacts/proudacts";

function App() {
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
    setList(ShopList.filter((item) => item.category === op));
  };
  return (
    <div className="App">
      <Header list={categories} OnFilter={FilterList} />
      <Proudacts list={FilteredList} />
    </div>
  );
}

export default App;
