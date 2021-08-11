import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./pages/Home";
import ProfileScreen from "./pages/Profile";
import DetailProductScreen from "./pages/DetailProduct";
import CartScreen from "./pages/Cart";

const App = () => {
  const LOCAL_STORAGE = "carts";
  const cachedCart = window.localStorage.getItem(LOCAL_STORAGE);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    if (cachedCart) {
      setCarts(JSON.parse(cachedCart));
    }
  }, [cachedCart]);

  const handleAddToCart = (item) => {
    const currentIndex = carts.length;
    const newCart = [...carts, { id: currentIndex + 1, item }];
    setCarts(newCart);
    window.localStorage.setItem(LOCAL_STORAGE, JSON.stringify(newCart));
  };

  const handleRemoveCartItem = (_event, id) => {
    const revisedCart = carts.filter((item) => item.id !== id);
    setCarts(revisedCart);
    window.localStorage.setItem(LOCAL_STORAGE, JSON.stringify(revisedCart));
  };

  return (
    <Router>
      <Route path="/" exact>
        <HomeScreen cart={carts} />
      </Route>
      <Route path="/profile" exact>
        <ProfileScreen cart={carts} />
      </Route>
      <Route path="/products/:id">
        <DetailProductScreen handleAddToCart={handleAddToCart} cart={carts} />
      </Route>
      <Route path="/carts">
        <CartScreen handleRemoveCartItem={handleRemoveCartItem} cart={carts} />
      </Route>
    </Router>
  );
};

export default App;
