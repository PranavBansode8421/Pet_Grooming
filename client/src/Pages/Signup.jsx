import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../Styles/Signup.css";
const API_BASE = process.env.REACT_APP_BASE_URL;
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    try{
      console.log(`${API_BASE}/api/auth/signup`)
        const res = await axios.post(`${API_BASE}/api/auth/signup`,formData);
        alert(res.data.message)
        navigate("/login")
    }catch (err){
        alert( "Signup failed");
    }

  };
  return (
    <div className="container-fluid   signup-wrapper pt-5  ">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6 ">
          <div className=" signup   p-5">
            <h2 className="mb-4 text-center">Signup</h2>
            
            <form
              onSubmit={handleSignup}
              className="d-flex flex-column justify-content-center  align-items-center"
            >
              <div className="col-md-6 ">
                <input
                  type="text"
                  name="name"
                  className="form-control my-1 "
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control my-2"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="password"
                  name="password"
                  className="form-control my-2"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <select
                  name="role"
                  className="form-select my-2"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <button className="btn btn-primary mt-4" type="submit">
                Signup
              </button>
              <div className="col-md-6 text-center mt-3">
                <span className="">Already Signup :</span>

                <NavLink className="mt-3 mx-2 text-decoration-none" to="/login">
                  Login here
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
