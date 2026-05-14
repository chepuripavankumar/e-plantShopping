import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  const plants = {
    "Flowering Plants": [
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
    ],
    Succulents: [
      {
        id: 3,
        name: "Cactus Plant",
        price: 20,
        img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 4,
        name: "Aloe Vera",
        price: 18,
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
      },
    ],
    "Indoor Plants": [
      {
        id: 5,
        name: "Snake Plant",
        price: 25,
        img: "https://images.unsplash.com/photo-1593691509543-c55fb32f8de5?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 6,
        name: "Peace Lily",
        price: 22,
        img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=400&q=80",
      },
    ],
  };

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1200px",
          margin: "40px auto",
          padding: "0 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2e7d32",
            marginBottom: "40px",
          }}
        >
          Products
        </h1>

        {Object.entries(plants).map(([category, items]) => (
          <div key={category} style={{ marginBottom: "50px" }}>
            <h2
              style={{
                color: "#1b5e20",
                borderBottom: "2px solid #c8e6c9",
                paddingBottom: "10px",
                marginBottom: "25px",
              }}
            >
              {category}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "25px",
              }}
            >
              {items.map((plant) => (
                <div
                  key={plant.id}
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
                    src={plant.img}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "15px",
                    }}
                  />

                  <h3>{plant.name}</h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      marginBottom: "15px",
                    }}
                  >
                    ${plant.price}
                  </p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                    style={{
                      padding: "10px 20px",
                      backgroundColor: isInCart(plant.id)
                        ? "#9e9e9e"
                        : "#2e7d32",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: isInCart(plant.id)
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
