import React from "react";
import { useNavigate } from "react-router-dom";
import "./Courses.css";

const courses = [
  {
    title: "Get a New Idea About Business",
    description: "Explore innovative business ideas and concepts.",
    imageUrl:
      "https://images.pexels.com/photos/4143556/pexels-photo-4143556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Start-Up Business for Home Makers",
    description: "Learn how to start a business from home.",
    imageUrl:
      "https://images.pexels.com/photos/6287331/pexels-photo-6287331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Side Business for College Students",
    description: "Discover side business ideas for college students.",
    imageUrl:
      "https://images.pexels.com/photos/5537935/pexels-photo-5537935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Build Your Own Company",
    description: "Step-by-step guide to building your own company.",
    imageUrl:
      "https://images.pexels.com/photos/6899395/pexels-photo-6899395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Sustainable and Eco-Friendly Businesses",
    description:
      "Learn how to start a business that focuses on sustainability and eco-friendly practices.",
    imageUrl:
      "https://images.pexels.com/photos/9324328/pexels-photo-9324328.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Online Business Opportunities",
    description:
      "Explore various online business opportunities and how to get started",
    imageUrl:
      "https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Health and Wellness Business",
    description:
      "Learn how to start a business in the health and wellness industry, such as fitness coaching, nutrition consulting, or wellness products.",
    imageUrl:
      "https://images.pexels.com/photos/8442482/pexels-photo-8442482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Social Media Influencing",
    description:
      "Get tips on becoming a social media influencer and monetizing your online presence.",
    imageUrl:
      "https://images.pexels.com/photos/7261085/pexels-photo-7261085.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Courses = ({ wishlist, handleWishlistToggle }) => {
  const navigate = useNavigate();

  const handleGetCourse = (course) => {
    navigate("/apply", { state: { course } });
  };

  return (
    <div className="courses-container">
      <button onClick={() => navigate("/home")} className="home-page-button">
        Home
      </button>
      <button
        onClick={() => navigate("/wishlist")}
        className="wishlist-page-button"
      >
        Wishlist
      </button>
      <h1>Our Courses</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="course-image"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button
              className="get-course-button"
              onClick={() => handleGetCourse(course)}
            >
              Get Course
            </button>
            <button
              className={`wishlist-button ${
                wishlist.includes(course) ? "wishlisted" : ""
              }`}
              onClick={() => handleWishlistToggle(course)}
            >
              {wishlist.includes(course) ? "♥" : "♡"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
