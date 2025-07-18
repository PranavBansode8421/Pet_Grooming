import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [role, setRole] = useState(""); // "user" or "admin"
  const [name, setName] = useState("");
  // const [email,setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("role");
    const userName = localStorage.getItem("name");
    // const userEmail = localStorage.getItem("email");

    setIsLogin(!!token);

    if (token && userData && userName) {
      try {
        setRole(userData); // Should be "admin" or "user"
        setName(userName);
      } catch (error) {
        console.error("Invalid user data in localStorage");
        setRole("");
      }
    } else {
      setRole("");
    }
  }, [location]);

  const handleLogout = () => {
    // localStorage.removeItem("token");
    // localStorage.removeItem("role");
    localStorage.clear(); // clears all data
    setIsLogin(false);
    setRole("");
    alert("You have been logged out.");
    window.location.href = "/login";
  };

  return (
    <div className="navbar-container p-2 z-1">
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#FFF9E5" }}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="./Assets/logo.svg" alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse fw-bold" id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/faq">
                  FAQ's
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  ContactUs
                </NavLink>
              </li>

              {/* {role} */}
              {role === "admin" && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin">
                    Admin
                  </NavLink>
                </li>
              )}
              {role === "user" && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/myappointments">
                    MyAppointments
                  </NavLink>
                </li>
              )}

              

              
            </ul>
            {isLogin && (
                <li className="nav-item d-flex justify-content-center align-items-center mx-1 fs-4">
                  {
                    <>
                      <span className="text-uppercase">Welcome {name} ! </span>
                      
                    </>
                  }
                </li>
              )}

            {/* Logout button when logged in */}
            {isLogin && (
              <div>
                <button
                  className="btn btn-sm cart fw-bold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
            {!isLogin && (
              <div>
                <NavLink to="/login" >
                  <button
                    className="btn btn-sm cart fw-bold"
                    
                  >
                    Login
                  </button>
                </NavLink>
              </div>
            )}
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
