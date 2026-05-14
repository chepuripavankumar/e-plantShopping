import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import ProductList from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Navbar from "./components/Navbar.jsx";


function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants!</p>

      <button className="get-started-btn" onClick={() => navigate("/plants")}>
        Get Started
      </button>

      <AboutUs />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>e-plantshopping</h1>
    </div>
  );
}

export default App;