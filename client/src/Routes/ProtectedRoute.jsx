import React from "react";
import { Navigate } from "react-router-dom";

let alertShown = false;

const ProtectedRoute = ({ allowedRoles = [], children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || !role) {
    if (!alertShown) {
      alertShown = true;
      alert("Access Restricted !! Please login first !");
    }
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    if (!alertShown) {
      alertShown = true;
      alert("You are not authorized to view this page.");
    }
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
