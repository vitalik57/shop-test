import { NavLink } from "react-router-dom";
import Katalog from "./Components/Katalog";
import { Route, Switch } from "react-router-dom";
import CartList from "./Components/CartList";

function App() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Katalog</NavLink>
        </li>
        <li>
          <NavLink to="/carts">CartList</NavLink>
        </li>
      </ul>{" "}
      <Switch>
        <Route exact path="/" component={Katalog} />
        <Route exact path="/carts" component={CartList} />
      </Switch>
    </>
  );
}

export default App;
