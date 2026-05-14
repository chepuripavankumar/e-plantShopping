import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function LandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Welcome to Paradise Nursery
      </h1>

      <p style={{ maxWidth: "700px", marginBottom: "30px", fontSize: "1.2rem" }}>
        Your one-stop destination for beautiful indoor and outdoor plants.
      </p>

      <Link to="/about">
        <button
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            cursor: "pointer",
            border: "none",
            borderRadius: "8px",
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;