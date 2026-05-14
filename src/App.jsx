import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./components/AboutUs.jsx";

import "./App.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful house plants!</p>

      <Link to="/plants">
        <button className="get-started-btn">Get Started</button>
      </Link>

      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;