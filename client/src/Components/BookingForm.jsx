import React, { useEffect, useState } from "react";
import "../Styles/BookingForm.css";
import axios from "axios";

const API_BASE = process.env.REACT_APP_BASE_URL;

const BookingForm = () => {
  const [data, setData] = useState({
    userid: "",
    ownerName: "",
    email: "",
    contact: "",
    petName: "",
    petType: "",
    package: "",
    date: "",
    time: "",
    message: "",
    amount: "",
    status: "",
  });

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedId = localStorage.getItem("id");

    setData((prevData) => ({
      ...prevData,
      ownerName: storedName || "",
      email: storedEmail || "",
      userid: storedId || "",
    }));
  }, []);

  const dataHandler = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...data };

    // Phone number validation
    if (name === "contact") {
      const phoneValue = value;

      if (!/^\d*$/.test(phoneValue)) return; // block non-numeric
      if (phoneValue.length === 1 && phoneValue === "0") return; // block starting with 0
      if (phoneValue.length > 10) return; // block more than 10 digits

      updatedData.contact = phoneValue;
      setData(updatedData);
      return;
    }

    updatedData[name] = value;

    // Set amount based on package
    if (name === "package") {
      let amount = 0;
      if (value === "Basic") amount = 1500;
      else if (value === "Standard") amount = 2500;
      else if (value === "Premium") amount = 3500;

      updatedData.amount = amount;
    }

    setData(updatedData);
  };

  const saveForm = async (e) => {
    e.preventDefault();

    // Final contact validation
    const phone = data.contact;
    if (!/^[1-9][0-9]{9}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number (cannot start with 0)");
      return;
    }

    try {
      await axios.post(`${API_BASE}/appointments`, data);
      alert("Form Submitted");

      setData({
        userid: data.userid,
        ownerName: data.ownerName,
        email: data.email,
        contact: "",
        petName: "",
        petType: "",
        package: "",
        date: "",
        time: "",
        message: "",
        amount: "",
      });
    } catch (err) {
      console.log("Error Is :- ", err);
      alert("Something went wrong after submitting form!!");
    }
  };

  return (
    <div className="container">
      <form onSubmit={saveForm}>
        <div className="row">
          <h1 className="text-center bookingtitle mt-3">
            Appointment Booking Form
          </h1>

          <div className="col-md-6 mt-4">
            <label htmlFor="name" className="fw-bold mb-2">
              Owner Name
            </label>
            <input
              type="text"
              name="ownerName"
              value={data.ownerName}
              onChange={dataHandler}
              className="form-control"
              id="owner-name"
              placeholder="Enter Owner Name"
              required
            />
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="Email" className="fw-bold mb-2">
              Email ID
            </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={dataHandler}
              className="form-control"
              id="Email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="contact" className="fw-bold mb-2">
              Contact Number
            </label>
            <input
              type="text"
              name="contact"
              value={data.contact}
              onChange={dataHandler}
              className="form-control"
              id="contact"
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter 10-digit phone number"
              required
            />
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="pet-name" className="fw-bold mb-2">
              Pet Name
            </label>
            <input
              type="text"
              name="petName"
              value={data.petName}
              onChange={dataHandler}
              className="form-control"
              id="pet-name"
              placeholder="Enter Pet Name"
              required
            />
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="pet-type" className="fw-bold mb-2">
              Pet Type
            </label>
            <select
              className="form-select"
              name="petType"
              value={data.petType}
              onChange={dataHandler}
              id="pet-type"
              required
            >
              <option value="none">Select Pet Type</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="package" className="fw-bold mb-2">
              Package
            </label>
            <select
              className="form-select"
              name="package"
              value={data.package}
              onChange={dataHandler}
              id="package"
              required
            >
              <option value="">Select Package</option>
              <option value="Basic">Basic</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
            </select>
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="date" className="fw-bold mb-2">
              Booking Date
            </label>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={dataHandler}
              className="form-control"
              id="date"
              required
            />
          </div>

          <div className="col-md-6 mt-4">
            <label htmlFor="time" className="fw-bold mb-2">
              Time Slot
            </label>
            <select
              className="form-select"
              name="time"
              value={data.time}
              onChange={dataHandler}
              id="time"
              required
            >
              <option value="">Select Time Slot</option>
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
              <option value="1:00 PM - 2:00 PM">1:00 PM - 2:00 PM</option>
              <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
              <option value="3:00 PM - 4:00 PM">3:00 PM - 4:00 PM</option>
            </select>
          </div>

          <div className="col-12 mt-4">
            <label htmlFor="message" className="fw-bold mb-2">
              Message
            </label>
            <textarea
              className="form-control"
              name="message"
              value={data.message}
              onChange={dataHandler}
              id="message"
              rows="4"
              placeholder="Enter any special requests or instructions"
            ></textarea>
          </div>

          <div className="text-center">
            <button className="btn btn-bookappointment mt-4 w-25">
              Book Appointment
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
