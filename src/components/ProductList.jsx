import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plants = [
  // Flowering Plants
  {
    id: 1,
    name: "Rose Plant",
    price: 10,
    category: "Flowering Plants",
    img: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=300",
  },
  {
    id: 2,
    name: "Tulip Plant",
    price: 15,
    category: "Flowering Plants",
    img: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=300",
  },

  // Succulents
  {
    id: 3,
    name: "Cactus Plant",
    price: 20,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300",
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 12,
    category: "Succulents",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=300",
  },

  // Indoor Plants
  {
    id: 5,
    name: "Snake Plant",
    price: 18,
    category: "Indoor Plants",
    img: "https://images.unsplash.com/photo-1593691509543-c55fb32f7f3a?w=300",
  },
  {
    id: 6,
    name: "Peace Lily",
    price: 22,
    category: "Indoor Plants",
    img: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=300",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  const groupedPlants = plants.reduce((groups, plant) => {
    if (!groups[plant.category]) {
      groups[plant.category] = [];
    }
    groups[plant.category].push(plant);
    return groups;
  }, {});

  return (
    <>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Products
        </h1>

        {Object.entries(groupedPlants).map(([category, categoryPlants]) => (
          <div key={category} style={{ marginBottom: "40px" }}>
            <h2>{category}</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
              }}
            >
              {categoryPlants.map((plant) => (
                <div
                  key={plant.id}
                  style={{
                    border: "1px solid #ddd",
                    padding: "15px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={plant.img}
                    alt={plant.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={isInCart(plant.id)}
                    style={{
                      padding: "8px 16px",
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