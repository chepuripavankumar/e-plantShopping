// src/components/Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav style={{ padding: "20px", background: "#2e7d32", color: "white" }}>
      <Link
        to="/"
        style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
      >
        Home
      </Link>

      <Link
        to="/plants"
        style={{ color: "white", marginRight: "20px", textDecoration: "none" }}
      >
        Products
      </Link>

      <Link
        to="/cart"
        style={{ color: "white", textDecoration: "none" }}
      >
        Cart ({totalQuantity})
      </Link>
    </nav>
  );
}

export default Navbar;