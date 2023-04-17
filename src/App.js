import React, { useState } from "react";
import Medicine from "./Components/Medicine/Medicine";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import CartProvider from "./Components/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Medicine />
      </main>
    </CartProvider>
  );
}

export default App;
