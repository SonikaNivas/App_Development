import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/bg-vedio.mp4";
import bgVideo from "../assets/bg-vedio.mp4"; // Correct path to the video file
import About from "./About";
import BlogSlider from "./BlogSlider";
import Footer from "./Footer";
import "./Home.css"; // Make sure to create and import the corresponding CSS file
import Nav from "./Nav";
import Team from "./Team";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/courses");
  };

  return (
    <>
      <div>
        <div
        >
          <Nav />
          <video autoPlay loop muted className="background-video">
            <source src={bgVideo} type="video/mp4" />
            
            Your browser does not support the video tag.
          </video>
          
          <br></br>

          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <BlogSlider />
        <br></br>
        <br></br>
        <div>
          <Team />
          <br></br>
          <br></br>
        </div>
        <div>
          <About />
          <br></br>
          <br></br>
        </div>
        <div>
          <iframe
            width="100%"
            height="600"
            frameBorder="0" // Corrected to camelCase
            scrolling="no"
            marginHeight="0" // Corrected to camelCase
            marginWidth="0" // Corrected to camelCase
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Maheshwari%20Nagar,%20Coimbatore,%20Tamil%20Nadu%20641004+(buisness%20developer%20company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
