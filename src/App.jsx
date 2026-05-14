// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<HomePage />} />

          {/* Product Listing Page */}
          <Route path="/plants" element={<ProductList />} />

          {/* Shopping Cart Page */}
          <Route path="/cart" element={<CartItem />} />

          {/* About Us Page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;