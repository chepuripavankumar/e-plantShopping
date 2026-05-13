import React from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Your Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>

              <div className="cart-buttons">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  +
                </button>

                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}

        <div className="total-section">Total Amount: ${totalAmount}</div>

        <button onClick={() => alert("Coming Soon!")}>Checkout</button>

        <br />
        <br />

        <Link to="/plants">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </>
  );
}

export default CartItem;