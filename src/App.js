import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import ProductDetails from "./Views/ProductDetails";
import { useState } from "react";
import myContext from "./MyContext";

function App() {
  let [shopingCart, setCart] = useState([]);
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
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <myContext.Provider value={[shopingCart, addItem, removeItem]}>
        <Switch>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </myContext.Provider>
    </Router>
  );
}

export default App;
