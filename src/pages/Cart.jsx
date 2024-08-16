import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((course, index) => (
            <li key={index}>
              <img
                src={course.imageUrl}
                alt={course.title}
                className="cart-image"
              />
              <div>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
