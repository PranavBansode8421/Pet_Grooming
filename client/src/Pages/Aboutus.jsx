import React from "react";
import "../Styles/Aboutus.css";
import Subaboutus from "../Components/Subaboutus";
import Whyus from "../Components/Whyus";
const Aboutus = () => {
  return (
    <>
      <div className="aboutus-container pb-5">
        <div className="container pb-2 ">
          <h1 className="aboutus-heading text-center mx-auto pt-5">
            Caring for Your Pets, One Groom at a Time.
          </h1>
          <p className="aboutus-subheading text-center py-4">
            Expert care, comfort, and style for your furry companions.
          </p>
          <div className="about-img-hero row d-flex justify-content-between align-items-center">
            <div className="col-md-4 my-4">
              <img
                src="./Assets/team3.jpg"
                loading="lazy"
                alt=""
                srcset="./Assets/team3.jpg 500w, ./Assets/team3.jpg 800w, ./Assets/team3.jpg 870w"
                className="image-about-hero1"
              />
            </div>
            <div className="col-md-4 my-4">
              <video
                className="image-about-hero1 no-controls-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="./Assets/hero-mid.mp4" type="video/mp4" />
                Your browser does not support the video.
              </video>
            </div>
            <div className="col-md-4 my-4">
              <img
                src="./Assets/team2.jpg"
                loading="lazy"
                alt=""
                srcset="./Assets/team2.jpg 500w, ./Assets/team2.jpg 800w, ./Assets/team2.jpg 870w"
                className="image-about-hero1"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <h3 className="stat-about">10</h3>
              <p className="stat-head-about">Years of Experience</p>
              <p className="stat-subhead-about">and more to come</p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="stat-about">100%</h3>
              <p className="stat-head-about">Success rate</p>
              <p className="stat-subhead-about">with outstanding qualit</p>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="stat-about">3</h3>
              <p className="stat-head-about">States operated</p>
              <p className="stat-subhead-about">
                Maharastra, Gujarat, and Madhya Pradesh.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-story-wrapper pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-7">
              <h4 className="ourstory ">our story</h4>
              <p className="ourstory-head mt-5">
                We started Pet Grooming from passion to four-legged friends.
              </p>
              <p className="ourstory-subhead mt-5">
                At Pet Grooming, our journey began with a simple love for pets
                and a passion for their well-being. Founded in [Year], we set
                out with one goal in mind: to create a grooming experience where
                every pet feels cared for, comfortable, and cherished.
              </p>
              <p className="ourstory-subhead mt-5">
                What started as a small, home-based grooming service has
                blossomed into a full-fledged business, proudly serving our
                community and its furry friends. We believe that grooming is not
                just about keeping pets looking their best—it’s about ensuring
                they feel their best, too. From the very beginning, we knew that
                each pet deserved personalized care, which is why we’ve built
                our reputation on trust, compassion, and expertise. ‍
              </p>
              <p className="ourstory-subhead mt-5">
                As pet owners ourselves, we understand how important it is to
                leave your pet in loving hands.
              </p>
              <div className="quotewrapper d-flex justify-content-center align-items-center mt-5">
                <p className="mb-0">
                  That’s why we treat every pet that walks through our doors as
                  if they were our own.
                </p>
              </div>
              <p className="ourstory-subhead mt-5">
                Whether it’s a simple bath or a full grooming session, we strive
                to make each visit a positive, stress-free experience that both
                pets and their owners can look forward to.
              </p>
              <p className="ourstory-subhead mt-5">
                Over the years, we’ve expanded our services, honed our skills,
                and formed lasting relationships with the pets we groom and the
                people who love them. We are committed to providing top-notch
                grooming, using only pet-safe products, and maintaining a clean,
                calm environment.
              </p>
              <p className="co-founder pb-0 mb-0 mt-5">- Jessie Smith</p>
              <p className="co-founder mt-0 pt-0"> Founder of Pet Grooming</p>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      {/* component aboutus */}
      <Subaboutus color="#FFF9E5" button="false" />
      {/* component whyus */}
      <Whyus/>
    </>
  );
};

export default Aboutus;
