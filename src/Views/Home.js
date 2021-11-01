import { useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Header/Header";
import Proudacts from "../components/Proudacts/proudacts";
function Home() {
  let [ShopList, setFullList] = useState([]);
  const [FilteredList, setList] = useState(ShopList);
  const [filterByPriceList, setPriceList] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((list) => {
        setFullList(list);
        setList(list);
        setPriceList(list);
      });
  }, []);
  const categories = ShopList.map((p) => p.category).filter(
    (value, index, array) => array.indexOf(value) === index
  );

  const filterListByPrice = (newValue) => {
    setPriceList(
      FilteredList.filter(
        (item) => item.price >= newValue[0] && item.price <= newValue[1]
      )
    );
  };
  const FilterList = (op) => {
    if (op === "All") {
      setList(ShopList);
      setPriceList(ShopList);
    } else {
      setList(ShopList.filter((item) => item.category === op));
      setPriceList(ShopList.filter((item) => item.category === op));
    }
  };
  return (
    <div className="App">
      <Header
        list={categories}
        OnFilter={FilterList}
        OnSlider={filterListByPrice}
      />
      <Cart />
      <Proudacts list={filterByPriceList} />
    </div>
  );
}
export default Home;
