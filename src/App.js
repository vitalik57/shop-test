import { NavLink } from "react-router-dom";
import Katalog from "./Components/Katalog/Katalog";
import { Route, Switch } from "react-router-dom";
import CartList from "./Components/CartList";
import styled from "./App.module.css";
function App() {
  return (
    <>
      <header className={styled.main_header}>
        <li>
          <NavLink className={styled.header_link} to="/">
            Katalog
          </NavLink>
        </li>
        <li>
          <NavLink className={styled.header_link} to="/carts">
            CartList
          </NavLink>
        </li>
      </header>{" "}
      <div className={styled.container}>
        <Switch>
          <Route exact path="/" component={Katalog} />
          <Route exact path="/carts" component={CartList} />
        </Switch>
      </div>
    </>
  );
}

export default App;
