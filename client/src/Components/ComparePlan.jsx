import React, { useState, useEffect } from "react";
import "../Styles/ComparePlan.css";
const ComparePlan = () => {
  const plans = [
    {
      id: 1,
      plan: "Basic",
      price: "₹1500",
      color: "#0C2E5D",
      backgroundColor: "#A6C1E7",
      src: "./Assets/Check_Blue.svg",
      Bathbrush: {
        heading: "Bath & brush",
        services: ["Shampoo & Conditioner"],
        checkicon: "./Assets/Check_Blue.svg",
        icon: "./Assets/Bath-blue.svg",
      },
      Trimming: {
        heading: "Trimming",
        services: ["Nail Clipping"],
        checkicon: "./Assets/Check_Yellow.svg",
        icon: "./Assets/Trimming.svg",
      },
      Extras: {
        heading: "Extras",
        services: [],
        checkicon: "./Assets/Check_Red.svg",
        icon: "./Assets/Extras.svg",
      },
    },
    {
      id: 2,
      price: "₹2500",
      plan: "Standard",
      backgroundColor: "#FDCB6E",
      color: "#3F2E21",
      src: "./Assets/Check_Yellow.svg",
      Bathbrush: {
        heading: "Bath & brush",
        services: ["Shampoo & Conditioner", "Flea Treatment"],
        checkicon: "./Assets/Check_Blue.svg",
        icon: "./Assets/Bath-blue.svg",
      },

      Trimming: {
        heading: "Trimming",
        services: ["Nail Clipping", "Ear Cleaning"],
        checkicon: "./Assets/Check_Yellow.svg",
        icon: "./Assets/Trimming.svg",
      },

      Extras: {
        heading: "Extras",
        services: ["Teeth Brushing"],
        checkicon: "./Assets/Check_Red.svg",
        icon: "./Assets/Extras.svg",
      },
    },
    {
      id: 3,
      price: "₹3500",
      plan: "Premium",
      backgroundColor: "#FF6F61",
      color: "#FFFBF1",
      src: "./Assets/Check_Red.svg",
      Bathbrush: {
        heading: "Bath & brush",
        services: ["Shampoo & Conditioner", "Flea Treatment", "Blow Dry"],
        checkicon: "./Assets/Check_Blue.svg",
        icon: "./Assets/Bath-blue.svg",
      },
      Trimming: {
        heading: "Trimming",
        services: ["Nail Clipping", "Ear Cleaning", "Sanitary Trim"],
        checkicon: "./Assets/Check_Yellow.svg",
        icon: "./Assets/Trimming.svg",
      },
      Extras: {
        heading: "Extras",
        services: ["Teeth Brushing", "Paw Massage"],
        checkicon: "./Assets/Check_Red.svg",
        icon: "./Assets/Extras.svg",
      },
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="compareplan-wrapper py-5">
      <div className="container">
        <h2 className="compareplan-heading my-5 ">Comapre the plans</h2>
        <div>
          {isMobile ? (
            <>
              <div className="row">
                {plans.map((val, index) => (
                  <div className="col-md-12 all-wrap" key={index}>
                    {/* Plan Heading + Price */}
                    <div className="text-center d-flex flex-column align-items-center">
                      <h3 className="compare-heading text-center mt-3">
                        {val.plan}
                      </h3>
                      <p className="compare-charges text-center mt-3">
                        {val.price}
                      </p>
                      <div
                        className="get-started-wrapper-sm p-3 text-center mt-3 mb-3"
                        style={{
                          backgroundColor: val.backgroundColor,
                          color: val.color,
                        }}
                      >
                        Get Started
                      </div>
                    </div>

                    {/* Bath & Brush */}
                    {val.Bathbrush.services.length > 0 && (
                      <div className="services-and-check-icon text-center mt-3">
                        
                        <h4 className="compare-service-heading">
                          {val.Bathbrush.heading}
                        </h4>
                        <img
                          src={val.Bathbrush.icon}
                          alt="Bath Icon"
                          style={{ width: "30px" }}
                          className="mb-2"
                        />
                        {val.Bathbrush.services.map((service, i) => (
                          <p className="compare-services-subheading" key={i}>
                            <img
                              src={val.Bathbrush.checkicon}
                              alt="✔"
                              className="me-2"
                              style={{ width: "18px" }}
                            />
                            {service}
                          </p>
                        ))}
                        <div className="d-flex justify-content-center">
                          <hr className="w-25 " />
                        </div>
                      </div>
                    )}

                    {/* Trimming */}
                    {val.Trimming.services.length > 0 && (
                      <div className="services-and-check-icon text-center mt-3">
                        <h4 className="compare-service-heading">
                          {val.Trimming.heading}
                        </h4>
                        <img
                          src={val.Trimming.icon}
                          alt="Trimming Icon"
                          style={{ width: "30px" }}
                          className="mb-2"
                        />
                        {val.Trimming.services.map((service, i) => (
                          <p className="compare-services-subheading" key={i}>
                            <img
                              src={val.Trimming.checkicon}
                              alt="✔"
                              className="me-2"
                              style={{ width: "18px" }}
                            />
                            {service}
                          </p>
                        ))}
                        <div className="d-flex justify-content-center">
                          <hr className="w-25 " />
                        </div>
                      </div>
                    )}

                    {/* Extras */}
                    {val.Extras.services.length > 0 && (
                      <div className="services-and-check-icon text-center mt-3 mb-3">
                        <h4 className="compare-service-heading">
                          {val.Extras.heading}
                        </h4>
                        <img
                          src={val.Extras.icon}
                          alt="Extras Icon"
                          style={{ width: "30px" }}
                          className="mb-2"
                        />
                        {val.Extras.services.map((service, i) => (
                          <p className="compare-services-subheading" key={i}>
                            <img
                              src={val.Extras.checkicon}
                              alt="✔"
                              className="me-2"
                              style={{ width: "18px" }}
                            />
                            {service}
                          </p>
                        ))}
                        
                      </div>
                    )}
                    <hr />
                    <hr />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="comparison-card-wrapper p-4">
              <div className="row py-4">
                <div className="col-md-5"></div>
                <div className="col-md-7">
                  <div className="row">
                    {plans.map((val, index) => {
                      return (
                        <div className="col-md-4 text-center d-flex flex-column align-items-center">
                          <h3 className="compare-heading text-center mt-3">
                            {val.plan}
                          </h3>
                          <p className="compare-charges text-center mt-3">
                            {val.price}
                          </p>
                          <div
                            className="get-started-wrapper-sm p-3 text-center mt-3"
                            style={{
                              backgroundColor: val.backgroundColor,
                              color: val.color,
                            }}
                          >
                            Get Started
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* partition */}
              <hr />

              <div className="row py-4">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-2  text-center">
                      <img src="./Assets/Bath-blue.svg" alt="" />
                    </div>
                    <div className="col-md-10">
                      <h2 className="compare-service-heading py-3 m-0">
                        Bath & Brush
                      </h2>
                      <div className="compare-services-subheading ">
                        <p className="my-5 ">Shampoo & Conditioner</p>
                        <p className="my-5 ">Flea Treatment</p>
                        <p className="my-5 ">Blow Dry</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    {plans.map((v, inx) => (
                      <div className="col-md-4 pt-5" key={inx}>
                        {plans.map((val, index) => {
                          return (
                            <>
                              {val.id === v.id &&
                                val.Bathbrush.services.length > 0 && (
                                  <>
                                    {val.Bathbrush.services.map(
                                      (service, idx) => (
                                        <div
                                          className="check-icon-wrapper text-center "
                                          key={idx}
                                        >
                                          <img
                                            src={val.src}
                                            alt={service}
                                            className="check-icon"
                                          />
                                        </div>
                                      )
                                    )}
                                  </>
                                )}
                            </>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* partition */}
              <hr />
              <div className="row py-4">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-2  text-center">
                      <img src="./Assets/Trimming.svg" alt="" />
                    </div>
                    <div className="col-md-10">
                      <h2 className="compare-service-heading py-3 m-0">
                        Trimming
                      </h2>
                      <div className="compare-services-subheading ">
                        <p className="my-5 ">Nail Clipping</p>
                        <p className="my-5 ">Ear Cleaning</p>
                        <p className="my-5 ">Sanitary Trim</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    {plans.map((v, inx) => (
                      <div className="col-md-4 pt-5" key={inx}>
                        {plans.map((val, index) => {
                          return (
                            <>
                              {val.id === v.id &&
                                val.Trimming.services.length > 0 && (
                                  <>
                                    {val.Trimming.services.map(
                                      (service, idx) => (
                                        <div
                                          className="check-icon-wrapper text-center "
                                          key={idx}
                                        >
                                          <img
                                            src={val.src}
                                            alt={service}
                                            className="check-icon"
                                          />
                                        </div>
                                      )
                                    )}
                                  </>
                                )}
                            </>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* partition */}
              <hr />
              <div className="row py-4">
                <div className="col-md-5">
                  <div className="row">
                    <div className="col-md-2  text-center">
                      <img src="./Assets/Extras.svg" alt="" />
                    </div>
                    <div className="col-md-10">
                      <h2 className="compare-service-heading py-3 m-0">
                        Extras
                      </h2>
                      <div className="compare-services-subheading ">
                        <p className="my-5 ">Teeth Brushing</p>
                        <p className="my-5 ">Paw Massage</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    {plans.map((v, inx) => (
                      <div className="col-md-4 pt-5" key={inx}>
                        {plans.map((val, index) => {
                          return (
                            <>
                              {val.id === v.id &&
                                val.Extras.services.length > 0 && (
                                  <>
                                    {val.Extras.services.map((service, idx) => (
                                      <div
                                        className="check-icon-wrapper text-center "
                                        key={idx}
                                      >
                                        <img
                                          src={val.src}
                                          alt={service}
                                          className="check-icon"
                                        />
                                      </div>
                                    ))}
                                  </>
                                )}
                            </>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparePlan;
