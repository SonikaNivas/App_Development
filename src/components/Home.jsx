import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logoLink}>
        <div style={styles.logo}>MedScape</div>
      </Link>
      <ul style={styles.navLinks}>
        <Link to="/" style={styles.navLink}>
          <li style={styles.navItem}>Home</li>
        </Link>
        <Link to="/search" style={styles.navLink}>
          <li style={styles.navItem}>Search</li>
        </Link>
        <Link to="/conditions" style={styles.navLink}>
          <li style={styles.navItem}>Conditions</li>
        </Link>
        <Link to="/medications" style={styles.navLink}>
          <li style={styles.navItem}>Medications</li>
        </Link>
        <Link to="/" style={styles.navLink}>
          <li style={styles.navItem}>Sign In</li>
        </Link>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px", // Increased padding for larger NavBar
    backgroundColor: "#004080",
    color: "#fff",
  },
  logo: {
    fontSize: "32px", // Increased font size for logo
    fontWeight: "bold",
  },
  logoLink: {
    textDecoration: "none",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  navLink: {
    textDecoration: "none",
    color: "#fff",
  },
  navItem: {
    margin: "0 20px", // Increased margin for more spacing
    fontSize: "22px", // Increased font size for navigation items
    cursor: "pointer",
  },
};

export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav style={styles.nav}>
//       <Link to="/" style={styles.logoLink}>
//         <div style={styles.logo}>MedScape</div>
//       </Link>
//       <ul style={styles.navLinks}>
//         <Link to="/" style={styles.navLink}>
//           <li style={styles.navItem}>Home</li>
//         </Link>
//         <Link to="/search" style={styles.navLink}>
//           <li style={styles.navItem}>Search</li>
//         </Link>
//         <Link to="/conditions" style={styles.navLink}>
//           <li style={styles.navItem}>Conditions</li>
//         </Link>
//         <Link to="/medications" style={styles.navLink}>
//           <li style={styles.navItem}>Medications</li>
//         </Link>
//         <Link to="/login" style={styles.navLink}>
//           <li style={styles.navItem}>Sign In</li>
//         </Link>
//       </ul>
//     </nav>
//   );
// };

// const styles = {
//   nav: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "20px 40px",
//     backgroundColor: "#004080",
//     color: "#fff",
//   },
//   logo: {
//     fontSize: "32px",
//     fontWeight: "bold",
//   },
//   logoLink: {
//     textDecoration: "none",
//     color: "#fff",
//   },
//   navLinks: {
//     display: "flex",
//     listStyle: "none",
//     padding: 0,
//     margin: 0,
//   },
//   navLink: {
//     textDecoration: "none",
//     color: "#fff",
//   },
//   navItem: {
//     margin: "0 20px",
//     fontSize: "22px",
//     cursor: "pointer",
//   },
// };

// export default Navbar;
