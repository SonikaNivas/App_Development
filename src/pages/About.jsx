import React, { useEffect, useState } from "react";
import "./About.css";

const images = [
  "https://images.pexels.com/photos/12737236/pexels-photo-12737236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5845733/pexels-photo-5845733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3321795/pexels-photo-3321795.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6340639/pexels-photo-6340639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/6914463/pexels-photo-6914463.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // Add more image URLs as needed
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container" style={{ marginLeft: "50px" }}>
      <div className="text-content">
        <h1 className="headline">Our Story</h1>
        <p className="body">
          <h2>
            Welcome to Pro Grow – where entrepreneurial dreams take root and
            flourish!
          </h2>
        </p>
        <p className="body">
          Once upon a time, Pro Grow was born from a simple yet powerful idea:
          to create a platform that empowers individuals with the knowledge and
          network needed to start and grow their businesses. Our founders, who
          were passionate entrepreneurs themselves, noticed a common challenge –
          many aspiring business owners struggled with limited access to
          essential resources and connections. At Pro Grow, we believe in
          turning business ideas into reality. Our platform offers a vast
          library of courses designed to equip users with vital business
          knowledge. Whether you're a freelancer seeking to expand your skills,
          an entrepreneur launching a startup, or a small business owner aiming
          to scale, Pro Grow has something for everyone. But education is just
          the beginning. We recognize that success often hinges on the right
          connections. That's why Pro Grow nurtures a vibrant community where
          members can connect, share experiences, and collaborate. Through
          networking events, forums, and mentorship programs, we help you forge
          meaningful relationships with like-minded individuals and industry
          experts. Pro Grow is dedicated to inclusivity, supporting individuals
          at all stages of their business journey. Whether you’re starting from
          scratch or looking to elevate your existing business, we're here to
          support you every step of the way. Join us at Pro Grow, and together,
          let’s transform your business dreams into reality. Welcome to a
          community where your growth is our priority.
        </p>
      </div>
      <div className="image-container">
        <img
          src={images[currentImageIndex]}
          alt="Craft Image"
          className="image"
        />
      </div>
    </div>
  );
};

export default About;
