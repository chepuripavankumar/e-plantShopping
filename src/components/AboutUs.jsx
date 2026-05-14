// src/components/AboutUs.jsx

import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#2e7d32" }}>
        Paradise Nursery
      </h1>

      <h2 style={{ marginTop: "20px", color: "#444" }}>
        Welcome to Paradise Nursery
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "30px auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        At Paradise Nursery, we believe every home deserves the beauty and
        freshness of nature. Our collection includes a wide variety of indoor
        plants, flowering plants, succulents, and decorative pots carefully
        selected to brighten your living space.
      </p>

      <p
        style={{
          maxWidth: "800px",
          margin: "20px auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
          color: "#555",
        }}
      >
        Whether you are a beginner or an experienced plant enthusiast, we offer
        healthy, high-quality plants and expert guidance to help your garden
        thrive.
      </p>

      <Link to="/plants">
        <button
          style={{
            marginTop: "30px",
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

export default AboutUs;