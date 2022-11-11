import { Fragment, useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
function App() {
  const [ShowCart, setShowCart] = useState(false);
  const ShowCartHandler = () => {
    setShowCart(true);
  };
  const HideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      {ShowCart && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
