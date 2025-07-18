import React from "react";
import "../Styles/Home.css";
import { NavLink } from "react-router-dom";

const Subaboutus = (props) => {
  const ImgData = [
    {
      id: 1,
      img: "./Assets/team1.jpg",
      Name: "Lily Hart",
      specialist: "Grooming Specialist",
    },
    {
      id: 2,
      img: "./Assets/team2.jpg",
      Name: "Jake Ford ",
      specialist: "Bath Expert",
    },
    {
      id: 3,
      img: "./Assets/team3.jpg",
      Name: "Mia Cole",
      specialist: "De-shedding specialist",
    },
    {
      id: 4,
      img: "./Assets/team4.jpg",
      Name: "Emma Reed",
      specialist: "Founder",
    },
    {
      id: 5,
      img: "./Assets/team5.jpg",
      Name: "Ryan Hale",
      specialist: "Nail Expert",
    },
    {
      id: 6,
      img: "./Assets/team1.jpg",
      Name: "Lily Hart",
      specialist: "Grooming Specialist",
    },
    {
      id: 7,
      img: "./Assets/team2.jpg",
      Name: "Jake Ford ",
      specialist: "Bath Expert",
    },
    {
      id: 8,
      img: "./Assets/team3.jpg",
      Name: "Mia Cole",
      specialist: "De-shedding specialist",
    },
    // {
    //   id: 9,
    //   img: "./Assets/team4.jpg",
    // },
    // {
    //   id: 10,
    //   img: "./Assets/team5.jpg",
    // }
  ];
  return (
    <div className="home-aboutus" style={{ backgroundColor: props.color }}>
      <div className="container-fluid  ">
        <div className="text-center row justify-content-center">
          <div className="col-md-5">
            <h3 className="text-center pt-5">about us</h3>
            <h2 className="mt-5">
              A Bunch of Loving People with a Passion for Pets
            </h2>
            <p className="text-center mt-5">
              We're a caring team of pet lovers, committed to providing gentle,
              reliable, and loving care for every furry friend.
            </p>
            {props.button === "true" && (
              <button className="btn btn-aboutus mt-4">
                <NavLink className="Nav" to="/about">
                  About us
                </NavLink>
              </button>
            )}
          </div>
        </div>
        <div className="slider-container">
          <div className=" pt-5 slider-track ">
            {ImgData.map((value, index) => {
              return (
                <div className="mx-3 desc-person" key={index}>
                  <img
                    className="  slide-img img-wrapper"
                    key={index}
                    src={value.img}
                    alt="."
                  />
                  <p className="text-center">{value.Name}</p>
                  <p className="text-center">{value.specialist}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subaboutus;
