// import {
//   Button,
//   createTheme,
//   Paper,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/signin", {
//           firstname,
//           lastname,
//           email,
//           password,
//         });
//         // Handle success response
//         console.log("Signup successful", response.data);
//         navigate("/login");
//       } catch (error) {
//         // Handle error response
//         console.error("Signup failed", error.response?.data || error.message);
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (firstname === "" || firstname === null) {
//       result = false;
//       setError("Enter your firstname");
//     } else if (lastname === "" || lastname === null) {
//       result = false;
//       setError("Enter your lastname");
//     } else if (email === "" || email === null) {
//       result = false;
//       setError("Enter your email");
//     } else if (password === "" || password === null) {
//       result = false;
//       setError("Password cannot be empty");
//     } else {
//       setError("");
//     }
//     return result;
//   };

//   return (
//     <div className="signup-page-wrapper">
//       <ThemeProvider theme={theme}>
//         <Paper elevation={10} className="signup-paper">
//           <br />
//           <center>
//             <Typography
//               style={{ fontSize: "50px", fontFamily: "initial", color: "#333" }}
//             >
//               Sign Up
//             </Typography>
//             <br />
//             <br />
//             <form onSubmit={handleSignup}>
//               <TextField
//                 id="outlined-basic-firstname"
//                 label="Firstname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter firstname"
//                 value={firstname}
//                 onChange={(e) => setFirstname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               &emsp;&emsp;&emsp;
//               <TextField
//                 id="outlined-basic-lastname"
//                 label="Lastname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter lastname"
//                 value={lastname}
//                 onChange={(e) => setLastname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 id="outlined-basic-email"
//                 label="Email"
//                 type="email"
//                 variant="standard"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 label="Password"
//                 type="password"
//                 id="outlined-basic-password"
//                 variant="standard"
//                 autoComplete="new-password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <Button type="submit" variant="contained">
//                 Sign Up
//               </Button>
//             </form>
//             <br />
//             <br />
//             <Link
//               to="/"
//               style={{
//                 color: "darkblue",
//                 textDecoration: "none",
//               }}
//             >
//               {"Already have an account?"}
//             </Link>
//           </center>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </Paper>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Signup;

// import {
//   Button,
//   createTheme,
//   Paper,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/signup", {
//           firstname,
//           lastname,
//           email,
//           password,
//         });
//         console.log("Signup successful", response.data);
//         navigate("/login");
//       } catch (error) {
//         console.error("Signup failed", error.response?.data || error.message);
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (firstname === "" || firstname === null) {
//       result = false;
//       setError("Enter your firstname");
//     } else if (lastname === "" || lastname === null) {
//       result = false;
//       setError("Enter your lastname");
//     } else if (email === "" || email === null) {
//       result = false;
//       setError("Enter your email");
//     } else if (password === "" || password === null) {
//       result = false;
//       setError("Password cannot be empty");
//     } else {
//       setError("");
//     }
//     return result;
//   };

//   return (
//     <div className="signup-page-wrapper">
//       <ThemeProvider theme={theme}>
//         <Paper elevation={10} className="signup-paper">
//           <br />
//           <center>
//             <Typography
//               style={{ fontSize: "50px", fontFamily: "initial", color: "#333" }}
//             >
//               Sign Up
//             </Typography>
//             <br />
//             <br />
//             <form onSubmit={handleSignup}>
//               <TextField
//                 id="outlined-basic-firstname"
//                 label="Firstname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter firstname"
//                 value={firstname}
//                 onChange={(e) => setFirstname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               &emsp;&emsp;&emsp;
//               <TextField
//                 id="outlined-basic-lastname"
//                 label="Lastname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter lastname"
//                 value={lastname}
//                 onChange={(e) => setLastname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 id="outlined-basic-email"
//                 label="Email"
//                 type="email"
//                 variant="standard"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 label="Password"
//                 type="password"
//                 id="outlined-basic-password"
//                 variant="standard"
//                 autoComplete="new-password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <Button type="submit" variant="contained">
//                 Sign Up
//               </Button>
//             </form>
//             <br />
//             <br />
//             <Link
//               to="/login"
//               style={{
//                 color: "darkblue",
//                 textDecoration: "none",
//               }}
//             >
//               {"Already have an account?"}
//             </Link>
//           </center>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </Paper>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Signup;

//

// import {
//   Button,
//   createTheme,
//   Paper,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/signup", {
//           firstname,
//           lastname,
//           email,
//           password,
//         });
//         console.log("Signup successful", response.data);
//         navigate("/login");
//       } catch (error) {
//         console.error("Signup failed", error.response?.data || error.message);
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (firstname === "" || firstname === null) {
//       result = false;
//       setError("Enter your firstname");
//     } else if (lastname === "" || lastname === null) {
//       result = false;
//       setError("Enter your lastname");
//     } else if (email === "" || email === null) {
//       result = false;
//       setError("Enter your email");
//     } else if (password === "" || password === null) {
//       result = false;
//       setError("Password cannot be empty");
//     } else {
//       setError("");
//     }
//     return result;
//   };

//   return (
//     <div className="signup-page-wrapper">
//       <ThemeProvider theme={theme}>
//         <Paper elevation={10} className="signup-paper">
//           <br />
//           <center>
//             <Typography
//               style={{ fontSize: "50px", fontFamily: "initial", color: "#333" }}
//             >
//               Sign Up
//             </Typography>
//             <br />
//             <br />
//             <form onSubmit={handleSignup}>
//               <TextField
//                 id="outlined-basic-firstname"
//                 label="Firstname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter firstname"
//                 value={firstname}
//                 onChange={(e) => setFirstname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               &emsp;&emsp;&emsp;
//               <TextField
//                 id="outlined-basic-lastname"
//                 label="Lastname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter lastname"
//                 value={lastname}
//                 onChange={(e) => setLastname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 id="outlined-basic-email"
//                 label="Email"
//                 type="email"
//                 variant="standard"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 label="Password"
//                 type="password"
//                 id="outlined-basic-password"
//                 variant="standard"
//                 autoComplete="new-password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <Button type="submit" variant="contained">
//                 Sign Up
//               </Button>
//             </form>
//             <br />
//             <br />
//             <Link
//               to="/login"
//               style={{
//                 color: "darkblue",
//                 textDecoration: "none",
//               }}
//             >
//               {"Already have an account?"}
//             </Link>
//           </center>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </Paper>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Signup;

// import {
//   Button,
//   createTheme,
//   Paper,
//   TextField,
//   ThemeProvider,
//   Typography,
// } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//   },
// });

// const Signup = () => {
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await axios.post("http://localhost:8080/api/signup", {
//           firstname,
//           lastname,
//           email,
//           password,
//         });
//         // Handle success response
//         console.log("Signup successful", response.data);
//         navigate("/"); // Navigate to login page on successful signup
//       } catch (error) {
//         // Handle error response
//         console.error("Signup failed", error.response?.data || error.message);
//         setError("Signup failed. Please try again.");
//       }
//     }
//   };

//   const validate = () => {
//     let result = true;
//     if (firstname === "" || firstname === null) {
//       result = false;
//       setError("Enter your firstname");
//     } else if (lastname === "" || lastname === null) {
//       result = false;
//       setError("Enter your lastname");
//     } else if (email === "" || email === null) {
//       result = false;
//       setError("Enter your email");
//     } else if (password === "" || password === null) {
//       result = false;
//       setError("Password cannot be empty");
//     } else {
//       setError("");
//     }
//     return result;
//   };

//   return (
//     <div className="signup-page-wrapper">
//       <ThemeProvider theme={theme}>
//         <Paper elevation={10} className="signup-paper">
//           <br />
//           <center>
//             <Typography
//               style={{ fontSize: "50px", fontFamily: "initial", color: "#333" }}
//             >
//               Sign Up
//             </Typography>
//             <br />
//             <br />
//             <form onSubmit={handleSignup}>
//               <TextField
//                 id="outlined-basic-firstname"
//                 label="Firstname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter firstname"
//                 value={firstname}
//                 onChange={(e) => setFirstname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               &emsp;&emsp;&emsp;
//               <TextField
//                 id="outlined-basic-lastname"
//                 label="Lastname"
//                 type="text"
//                 variant="standard"
//                 placeholder="Enter lastname"
//                 value={lastname}
//                 onChange={(e) => setLastname(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 id="outlined-basic-email"
//                 label="Email"
//                 type="email"
//                 variant="standard"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <TextField
//                 label="Password"
//                 type="password"
//                 id="outlined-basic-password"
//                 variant="standard"
//                 autoComplete="new-password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputLabelProps={{ style: { color: "#333" } }}
//                 InputProps={{ style: { color: "#333" } }}
//               />
//               <br />
//               <br />
//               <Button type="submit" variant="contained">
//                 Sign Up
//               </Button>
//             </form>
//             <br />
//             <br />
//             <Link
//               to="/"
//               style={{
//                 color: "darkblue",
//                 textDecoration: "none",
//               }}
//             >
//               {"Already have an account?"}
//             </Link>
//           </center>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//         </Paper>
//       </ThemeProvider>
//     </div>
//   );
// };

// export default Signup;

import {
  Button,
  createTheme,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("http://localhost:8080/api/signup", {
          firstname,
          lastname,
          email,
          password,
        });
        console.log("Signup successful", response.data);
        navigate("/"); // Navigate to login page on successful signup
      } catch (error) {
        console.error("Signup failed", error.response?.data || error.message);
        setError("Signup failed. Please try again.");
      }
    }
  };

  const validate = () => {
    let result = true;
    if (!firstname) {
      result = false;
      setError("Enter your firstname");
    } else if (!lastname) {
      result = false;
      setError("Enter your lastname");
    } else if (!email) {
      result = false;
      setError("Enter your email");
    } else if (!password) {
      result = false;
      setError("Password cannot be empty");
    } else {
      setError("");
    }
    return result;
  };

  return (
    <div className="signup-page-wrapper">
      <ThemeProvider theme={theme}>
        <Paper elevation={10} className="signup-paper">
          <br />
          <center>
            <Typography
              style={{ fontSize: "50px", fontFamily: "initial", color: "#333" }}
            >
              Sign Up
            </Typography>
            <br />
            <br />
            <form onSubmit={handleSignup}>
              <TextField
                id="outlined-basic-firstname"
                label="Firstname"
                type="text"
                variant="standard"
                placeholder="Enter firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
              &emsp;&emsp;&emsp;
              <TextField
                id="outlined-basic-lastname"
                label="Lastname"
                type="text"
                variant="standard"
                placeholder="Enter lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
              <br />
              <br />
              <TextField
                id="outlined-basic-email"
                label="Email"
                type="email"
                variant="standard"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
              <br />
              <br />
              <TextField
                label="Password"
                type="password"
                id="outlined-basic-password"
                variant="standard"
                autoComplete="new-password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ style: { color: "#333" } }}
                InputProps={{ style: { color: "#333" } }}
              />
              <br />
              <br />
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            </form>
            <br />
            <br />
            <Link
              to="/"
              style={{
                color: "darkblue",
                textDecoration: "none",
              }}
            >
              {"Already have an account?"}
            </Link>
          </center>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default Signup;
