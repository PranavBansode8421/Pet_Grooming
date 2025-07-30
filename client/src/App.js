import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BookingForm from "./Components/BookingForm";

import Admin from "./Pages/Admin";
import Update from "./Pages/Update";
import Aboutus from "./Pages/Aboutus";
import Services from "./Pages/Services";
import Pricing from "./Pages/Pricing";
import Faq from "./Pages/Faq";
import Contactus from "./Pages/Contactus";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Myappointments from "./Pages/Myappointments";
import PageNotFound from "./Pages/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/login" element={<Login />} />
          <Route
            path="/update/:id"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <Update />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myappointments"
            element={
              <ProtectedRoute userrole="user">
                <Myappointments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookappointment"
            element={
              <ProtectedRoute userrole="user">
                <BookingForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute userrole="admin">
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
