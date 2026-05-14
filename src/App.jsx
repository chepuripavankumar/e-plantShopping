// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import HomePage from "./components/AboutUs"; // Temporary landing page
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Products page */}
          <Route path="/plants" element={<ProductList />} />

          {/* Shopping cart */}
          <Route path="/cart" element={<CartItem />} />

          {/* About page */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;