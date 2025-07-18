import React from "react";
import "../Styles/whyus.css";

const Whyus = () => {
  const cardData = [
    {
      id: 1,
      icon: "./Assets/certificate.svg",
      title: "Certified groomers",
      description:
        "Our certified groomers are trained professionals who deliver expert care with a gentle, compassionate touch ensuring your pet feels safe and comfortable.",
      color: "#A6C1E7",
    },
    {
      id: 2,
      icon: "./Assets/bath.svg",
      title: "Premium Pet-Safe Products",
      description:
        "We use only high-quality, non-toxic shampoos and conditioners that are safe for your pet’s skin and fur, leaving them clean, soft, and smelling great.",
      color: "#FDCB6E",
    },
    {
      id: 3,
      icon: "./Assets/heart.svg",
      title: "Stress-Free Handling Techniques",
      description:
        "Our trained staff uses gentle handling methods and positive reinforcement to keep even the most anxious pets calm and relaxed throughout the session.",
      color: "#FF6F61",
    },
    {
      id: 4,
      icon: "./Assets/dog.svg",
      title: "Grooming for All Breeds & Sizes",
      description:
        "Whether you have a tiny kitten, a large dog, or anything in between, our grooming services are designed to meet the needs of every pet no matter their breed, size, or temperament.",
      color: "#A6C1E7",
    },
  ];
  return (
    <>
      <div className="whyus-wrapper py-5">
        <div className="container pt-3">
          <h3 className="ourstory text-center">why us</h3>
          <h2 className="ourstory-head mt-5 text-center">
            Why choose Pet Grooming services?
          </h2>
          <div className="row">
            {cardData.map((value, index) => {
              return (
                <div className="col-md-6 mt-5" key={index}>
                  <div className="card-wrapper p-5">
                    <div className="whyus-symbol" style={{ backgroundColor: value.color }}>
                      <img
                        src={value.icon}
                        loading="lazy"
                        alt={value.title}
                        className="icon-value-halve"
                      />
                    </div>
                    <h3 className="whyus-card-head">{value.title}</h3>
                    <p className="whyus-card-subhead mt-3">
                        {value.description}
                    </p>
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

export default Whyus;
