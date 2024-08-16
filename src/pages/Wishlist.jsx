import React from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = ({ wishlist, handleWishlistToggle }) => {
  const navigate = useNavigate();

  return (
    <div className="wishlist-container">
      <div className="top-bar">
        <button
          onClick={() => navigate("/courses")}
          className="back-to-courses-button"
        >
          Back to Courses
        </button>
        {/* <button onClick={() => navigate("/cart")} className="cart-button">
          <FaShoppingCart />
        </button> */}
      </div>
      <h1>Your Wishlist</h1>
      {wishlist.length > 0 ? (
        <div className="wishlist-grid">
          {wishlist.map((course, index) => (
            <div key={index} className="wishlist-card">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="wishlist-image"
              />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="wishlist-actions">
                <button
                  className="remove-wishlist-button"
                  onClick={() => handleWishlistToggle(course)}
                >
                  Remove from Wishlist
                </button>
                {/* <button
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(course)}
                >
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;
