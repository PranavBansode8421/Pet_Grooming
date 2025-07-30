import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/PageNotFound.css"; // Optional custom styling

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you’re looking for doesn’t exist.</p>
        <NavLink to="/" className="home-link">
          🏠 Go Back to Home
        </NavLink>
      </div>
    </div>
  )
}

export default PageNotFound
