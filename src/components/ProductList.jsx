// src/components/ProductList.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Rose Plant",
      price: 10,
      img: "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Tulip Plant",
      price: 15,
      img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Cactus Plant",
      price: 20,
      img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#2e7d32",
          }}
        >
          Our Plants
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              />

              <h3>{product.name}</h3>
              <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                ${product.price}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#2e7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;