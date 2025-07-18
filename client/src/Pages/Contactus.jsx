
// import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import axios from "axios";
import "../Styles/Faq.css";
import "../Styles/Contactus.css";

const Contactus = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target; //destructuring
    setContactData((prevdata) => ({ ...prevdata, [name]: value }));
    console.log(contactData);
  };

  const handleSubmit =  (e) => {
    
      e.preventDefault();

      axios.post("http://localhost:3001/contactus", contactData)
      .then((res)=>{
        console.log(res);
        alert(res.data);
        setContactData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err)=>{
        console.error("Error :- ", err);
        alert("Something went wrong!");
      });


      //********************************************** */
    //email JS
    //********************************************** */
    // emailjs
    //   .sendForm(
    //     "service_8dhm9pl", // Your EmailJS service ID
    //     "template_sgwbnum", // Your EmailJS template ID
    //     form.current,
    //     {
    //       publicKey: "steCnn3oiv759fbVe", // Your EmailJS Public Key
    //     }
    //   )
    //   .then(
    //     () => {
    //       console.log("SUCCESS!");
    //       alert("Message sent successfully!");
    //       form.current.reset(); // Clear form
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //       alert("Something went wrong. Please try again.");
    //     }
    //   );
    //***************************************************//





    
  };

  return (
    <div className="contactus-wrapper m-0 p-0">
      <div className="container">
        <h1 className="faq text-center py-3">Contact us</h1>

        <div className="row">
          {/* Left Contact Info */}
          <div className="col-md-6">
            <h1 className="faq-title text-center py-3">We’re here to help</h1>
            <p className="contactus-subhead">
              Ask us about our services, products or book a slot for your pet
              grooming.
            </p>
            <hr />

            {/* Email */}
            <div className="contact-link-wrapper d-flex mt-2">
              <div className="contact-icon-wrapper d-flex align-items-center justify-content-center">
                <img src="./Assets/mail.svg" alt="Email Icon" />
              </div>
              <div className="ms-3">
                <h3 className="contact-text mb-0">Our email</h3>
                <p className="contact-subtext mb-0">
                  <a
                    href="mailto:pranavbansode8421@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    pranavbansode8421@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-link-wrapper d-flex mt-4">
              <div className="contact-icon-wrapper d-flex align-items-center justify-content-center">
                <img src="./Assets/phone.svg" alt="Phone Icon" />
              </div>
              <div className="ms-3">
                <h3 className="contact-text mb-0">Phone Us</h3>
                <p className="contact-subtext mb-0">
                  <a
                    href="tel:+919284959411"
                    className="text-decoration-none text-dark"
                  >
                    +91 9284959411
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="contact-link-wrapper d-flex mt-4">
              <div className="contact-icon-wrapper d-flex align-items-center justify-content-center">
                <img src="./Assets/location.svg" alt="Location Icon" />
              </div>
              <div className="ms-3">
                <h3 className="contact-text mb-0">Find Us @</h3>
                <p className="contact-subtext mb-0">
                  <a
                    href="https://www.google.com/maps/place/Magarpatta,+Hadapsar,+Pune,+Maharashtra/"
                    className="text-decoration-none text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Magarpatta City, Hadapsar, Pune.
                  </a>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <hr />
            <div className="socialmedia-wrapper d-flex mb-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./Assets/instagram.svg"
                  alt="Instagram"
                  className="me-3"
                />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./Assets/youtube.svg"
                  alt="YouTube"
                  className="me-3"
                />
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                <img
                  src="./Assets/telegram.svg"
                  alt="Telegram"
                  className="me-3"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./Assets/linkedin.svg"
                  alt="LinkedIn"
                  className="me-3"
                />
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-6 pb-5">
            <div className="contact-form-wrapper">
              <form  onSubmit={(e) => handleSubmit(e)}>
                <div className="col-md-12 mt-3">
                  <label htmlFor="name" className="fw-bold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control mt-2"
                    id="name"
                    placeholder="Enter Your Name"
                    onChange={(e) => handleChange(e)}
                    value={contactData.name}
                    required
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="email" className="fw-bold mb-1">
                    Email Id
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control mt-2"
                    id="email"
                    placeholder="Enter Your Email Id"
                    onChange={(e) => handleChange(e)}
                    value={contactData.email}
                    required
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="subject" className="fw-bold mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control mt-2"
                    id="subject"
                    placeholder="Enter your Subject"
                    onChange={(e) => handleChange(e)}

                    value={contactData.subject}
                    required
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <label htmlFor="message" className="fw-bold mb-1">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="Enter Your Message"
                    onChange={(e) => handleChange(e)}
                    value={contactData.message}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-send mt-3 p-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
