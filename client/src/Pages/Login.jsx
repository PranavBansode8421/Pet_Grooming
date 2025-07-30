import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const API_BASE = process.env.REACT_APP_BASE_URL ; // "http://127.0.0.1:3001"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, credentials);
      const { token, role,name,email,id } = res.data; //
      // console.log(role)//
      // console.log(res)
      // Save token and user in localStorage
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("role", role);
      localStorage.setItem("token", token);

      // alert("Login successful!");

      // Redirect based on role
      if (role === "admin") {//
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div className="container-fluid signup-wrapper pt-5 ">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-md-6 ">
          <div className=" signup   p-5">
            <h2 className="mb-4 text-center d-flex flex-column justify-content-center">
              Login
            </h2>

            <form
              onSubmit={handleLogin}
              className="d-flex flex-column justify-content-center  align-items-center"
            >
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control my-2"
                  placeholder="Enter email"
                  value={credentials.email}
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
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-success mt-2" type="submit">
                  Login
                </button>
                <span className="mt-2">Don't have an account?</span>
                <NavLink className="text-decoration-none mt-2" to="/signup">
                  Sign Up here.
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
