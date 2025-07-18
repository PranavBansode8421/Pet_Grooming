
import React from "react";
import "../Styles/Pricing.css";
import { NavLink } from "react-router-dom";
import ComparePlan from "../Components/ComparePlan";

const Pricing = () => {
  const priceCardData = [
    {
      id: 1,
      price: "₹ 1500 INR",
      plan: "Basic grooming",
      desc: "Pets needing regular maintenance with no major grooming requirements.",
      services: [
        "Relaxing bath",
        "Nail trimming",
        "Ear cleaning",
        "Brushing and combing",
      ],
      backgroundColor: "#A6C1E7",
      color: "#0C2E5D",
    },
    {
      id: 2,
      price: "₹ 2500 INR",
      plan: "Standard grooming",
      desc: "Pets that need a full grooming session including a fresh haircut.",
      services: [
        "same as basic+",

        "haircut",

        "teeth brushing",

        "basic medical check",
      ],
      backgroundColor: "#FDCB6E",
      color: "#3F2E21",
    },
    {
      id: 3,
      price: "₹ 3500 INR",
      plan: "Premium grooming",
      desc: "Pets requiring extra attention to their coat, teeth, and skin care.",
      services: [
        "same as standard +",
        "de-shedding",
        "coat whitening",
        "extra medical check",
      ],
      backgroundColor: "#FF6F61",
      color: "#FFFBF1",
    },
  ];
  return (
    <>
      <div className="pricing-wrapper">
        <div className="container">
          <h1 className="pricing-heading text-center">Our packages</h1>
          <p className="pricing-subheading text-center px-5 my-5">
            We offer grooming packages for every pet and budget from quick
            cleanups to full spa treatments, all with expert care and love.
          </p>
          <div className="row">
            {priceCardData.map((val, index) => {
              return (
                <div className="col-lg-4 my-3 p-3" key={index}>
                  <div className="pricing-card-wrapper p-5">
                    <div
                      className="price-tag"
                      style={{
                        color: val.color,
                        backgroundColor: val.backgroundColor,
                      }}
                    >
                      {val.price}
                    </div>
                    <h2 className="price-plan mt-4">{val.plan}</h2>
                    <p className="price-plan-desc my-4">{val.desc}</p>
                    <hr />

                    {val.services.map((service, i) => {
                      return (
                        <div
                          className="services-list d-flex align-items-center mt-4 "
                          key={i}
                        >
                          <img
                            src="./Assets/check-solid.svg"
                            loading="lazy"
                            alt=""
                            class="icon-check-pricing"
                          />
                          <p className="service-name mb-0 ms-3 ">{service}</p>
                        </div>
                      );
                    })}

                    <NavLink className="Nav">
                      <div
                        className="get-started mt-5 p-3 text-center"
                        style={{
                          backgroundColor: val.backgroundColor,
                          color: val.color,
                        }}
                      >
                        Get Started.
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Component Compare plan */}
      <ComparePlan/>
    </>
  );
};

export default Pricing;
