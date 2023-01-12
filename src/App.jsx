import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Header from "./assets/component/Layout/Header";
import Meals from "./assets/component/Meals/Meals";
import Cart from "./assets/component/Cart/Cart"

const App = () => {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
      {cartIsShown && <Cart/>}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
