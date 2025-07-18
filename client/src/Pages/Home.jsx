import React from "react";
import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import Subaboutus from "../Components/Subaboutus";
const Home = () => {
  
  return (
    <>
      <div className="home-bg  p-0">
        <div className="container ">
          <div className="row">
            <div className="col-md-6 d-flex flex-column justify-content-center align-items-start text-start">
              <h1 className="my-4 home-title">
                Pamper your pet with expert care.
              </h1>
              <p className="my-4 home-description">
                Our team of experienced groomers is dedicated to providing the
                best care for your furry friend. Providing expert care and
                personalized grooming for happy, healthy pets every time
              </p>
              <NavLink className="nav-link" to="/bookappointment">
                <button className="btn btn-bookappointment p-3 my-4">
                  Book Appointment
                </button>
              </NavLink>
            </div>
            <div className="col-md-6 ">
              <img
                src="/Assets/dog-bg-home.png"
                alt=""
                className="home-dog-bg-img"
              />
            </div>
          </div>
        </div>
      </div>

      <Subaboutus
      color="#fffbf1"
      button="true"
      />

    </>
  );
};

export default Home;
