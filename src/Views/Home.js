import { useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Header/Header";
import Proudacts from "../components/Proudacts/proudacts";
import myContext from "../MyContext";
function Home() {
  let [shopingCart, setCart] = useState([]);
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
  const addItem = (im, title, price, id) => {
    for (let i = 0; i < shopingCart.length; i += 1) {
      if (shopingCart[i].id === id) {
        shopingCart[i].qty += 1;
        setCart([...shopingCart]);
        return;
      }
    }
    const item = { im, title, price, id, qty: 1 };
    setCart([...shopingCart, item]);
  };
  const removeItem = (id) => {
    for (let i = 0; i < shopingCart.length; i += 1) {
      if (shopingCart[i].id === id) {
        if (shopingCart[i].qty > 1) {
          shopingCart[i].qty -= 1;
          setCart([...shopingCart]);
          return;
        } else {
          shopingCart.splice(i, 1);
          setCart([...shopingCart]);
          return;
        }
      }
    }
  };
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
    <myContext.Provider value={[shopingCart, addItem, removeItem]}>
      <div className="App">
        <Header
          list={categories}
          OnFilter={FilterList}
          OnSlider={filterListByPrice}
        />
        <Cart />
        <Proudacts list={filterByPriceList} />
      </div>
    </myContext.Provider>
  );
}
export default Home;
