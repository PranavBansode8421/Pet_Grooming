import React from "react";
import "../Styles/Services.css";
const Services = () => {
  const cardData = [
    {
      id: 1,
      icon: "./Assets/heart-solid.svg",
      title: "Full grooming",
      description:
        "A comprehensive service that includes a bath, haircut, nail trimming, ear cleaning, and brushing for a fresh, clean look, ensuring your pet feels their best.",
      color: "#A6C1E7",
    },
    {
      id: 2,
      icon: "./Assets/bath-solid.svg",
      title: "Bath & Brush",
      description:
        "A soothing bath with pet-friendly shampoo, followed by brushing to remove loose fur, prevent matting, and leave your pet looking refreshed.",
      color: "#FDCB6E",
    },
    {
      id: 3,
      icon: "./Assets/cut-solid.svg",
      title: "Nail Trimming",
      description:
        "Quick and gentle nail clipping to keep your pet’s paws healthy, preventing overgrown nails from causing discomfort or issues walking.",
      color: "#FF6F61",
    },
    {
      id: 4,
      icon: "./Assets/tooth-solid.svg",
      title: "Teeth Brushing",
      description:
        "A thorough teeth cleaning with pet-safe toothpaste to maintain hygiene, reduce bad breath, and help prevent dental issues down the line.",
      color: "#FDCB6E",
    },
    {
      id: 5,
      icon: "./Assets/dog-solid.svg",
      title: "De-shedding",
      description:
        "Specialized grooming to reduce shedding and promote a smooth, healthy coat, perfect for pets with heavy fur or during shedding periods.",
      color: "#FF6F61",
    },
    {
      id: 6,
      icon: "./Assets/paw-solid.svg",
      title: "Puppy’s First Groom",
      description:
        "A gentle, stress-free introduction to grooming for puppies, including a light trim, bath, nail trimming, and extra care to ensure a positive experience.",
      color: "#A6C1E7",
    },
  ];
  return (
    <>
      <div className="service-wrapper py-2">
        <div className="container">
          <h1 className="services-heading text-center py-5 ">
            Explore our services
          </h1>
          <div className="row">
            {cardData.map((val, index) => {
              return (
                <div className="col-md-4 p-3 mb-3" key={index}>
                  <div className="service-card-wrapper p-4">
                    <div className="icon-wrapper" style={{ backgroundColor: val.color }}>
                      <img
                        src={val.icon}
                        loading="lazy"
                        alt={val.title}
                      />
                    </div>
                    <h3 className="services-card-title mt-3">{val.title}</h3>
                    <p className="services-card-description mt-3">
                        {val.description}
                    </p>
                    <p className="service-card-readmore mt-3">read more</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
