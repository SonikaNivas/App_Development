import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ApplicationForm from "./pages/ApplicationForm";
import Cart from "./pages/Cart"; // Import the Cart component
import ContactPage from "./pages/ContactPage";
import Courses from "./pages/Cources"; // Correct path if necessary
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Instructor from "./pages/Instructor";
import Login from "./pages/Login";
import Node from "./pages/Node";
import Service from "./pages/Service";
import SignUp from "./pages/SignUp";
import UpcomingEvents from "./pages/UpcomingEvents";
import Wishlist from "./pages/Wishlist";

export default function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleWishlistToggle = (course) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(course)
        ? prevWishlist.filter((item) => item !== course)
        : [...prevWishlist, course]
    );
  };

  const handleAddToCart = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/node" element={<Node />} />
        <Route path="/instructor" element={<Instructor />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/live" element={<UpcomingEvents />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/courses"
          element={
            <Courses
              wishlist={wishlist}
              handleWishlistToggle={handleWishlistToggle}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              handleWishlistToggle={handleWishlistToggle}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}
