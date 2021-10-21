import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import ProductDetails from "./Views/ProductDetails";

function App() {
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

      <Switch>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
