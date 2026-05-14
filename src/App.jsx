import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function HomePage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#2e7d32",
          marginBottom: "20px",
        }}
      >
        Welcome to Paradise Nursery
      </h1>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto 30px",
          lineHeight: "1.8",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Discover beautiful indoor and outdoor plants to brighten your home and
        garden.
      </p>

      <Link to="/plants">
        <button
          style={{
            padding: "12px 30px",
            fontSize: "1rem",
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;