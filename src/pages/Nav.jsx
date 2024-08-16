import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css"; // Make sure to create and import the corresponding CSS file

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>PROGROW</h1>
        </div>
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/node">Node</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="sidebar-close" onClick={toggleSidebar}>
            &times;
          </button>
          <div className="sidebar-content">
            <h2>Sidebar</h2>
            <ul>
              <li>
                <Link to="/instructor">Instructors</Link>
              </li>
              <li>
                <Link to="/live">Live Events</Link>
              </li>
              <li>
                <Link to="/faq">FAQ's</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
