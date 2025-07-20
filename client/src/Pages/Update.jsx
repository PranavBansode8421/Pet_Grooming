import React, { useEffect } from "react";
import "../Styles/BookingForm.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const API_BASE = process.env.REACT_APP_BASE_URL;
const Update = () => {
  //1st step of form validation is define the state of form data
  const [data, setData] = useState({
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

  const navigate = useNavigate();
  const location = useLocation();
  const appointmentId = location.pathname.split("/")[2];

  

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const response = await axios.get(
         `${API_BASE}/appointments/${appointmentId}`
        );
        const appointment = response.data;

        const formattedDate = appointment.date
          ? new Date(appointment.date).toISOString().split("T")[0]
          : "";

        setData({
          ...appointment,
          date: formattedDate,
        });
      } catch (error) {
        console.error("Error fetching appointment:", error);
        alert("Failed to load appointment data");
      }
    };

    fetchAppointment();
  }, [appointmentId]);

  //3rd step of form validation is handle the form data
  const dataHandler = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    let updatedData = { ...data, [name]: value };

    if (name === "package") {
      let amount = 0;
      if (value === "Basic") {
        amount = 1500;
      } else if (e.target.value === "Standard") {
        amount = 2500;
      } else if (e.target.value === "Premium") {
        amount = 3500;
      }
      updatedData.amount = amount;
      alert(
        `You have selected the ${value} package. The amount is ₹${amount}.`
      );
    }
    //4th step of form validation is set the data in state
    setData(updatedData);
  };
  //5th step of form validation is handle the form submission
  const saveForm = async (e) => {
    try {
      e.preventDefault();
      alert("Form Submitted");
      console.log(data);

      await axios.put(
        "http://127.0.0.1:3001/appointments/" + appointmentId,
        data
      );
      console.log("Appointment Details Updated Sucessfully !! ::" + data);
      navigate("/");
    } catch (error) {
      alert("Error Occur While Submitting Update Form !! ");
      console.error("Updated Form submission error:", error);
    }
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={(e) => saveForm(e)}>
          <div className="row">
            <h1 className="text-center bookingtitle mt-3">
              Update Existing Booked Appointment
            </h1>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="name" className="fw-bold mb-2">
                Owner Name
              </label>
              {/* 2nd step value property */}
              <input
                type="text"
                name="ownerName"
                value={data.ownerName}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                id="owner-name"
                placeholder="Enter Owner Name"
                required
              />
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="Email" className="fw-bold mb-2">
                Email ID
              </label>
              <input
                type="Email"
                name="email"
                value={data.email}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                id="Email"
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="contact" className="fw-bold mb-2">
                Contact Number
              </label>
              <input
                type="text"
                name="contact"
                value={data.contact}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                id="contact"
                placeholder="Enter Contact Number"
                required
              />
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="pet-name" className="fw-bold mb-2">
                Pet Name
              </label>
              <input
                type="text"
                name="petName"
                value={data.petName}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                id="pet-name"
                placeholder="Enter Pet Name"
                required
              />
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="pet-type" className="fw-bold mb-2">
                Pet Type
              </label>
              <select
                className="form-select"
                name="petType"
                value={data.petType}
                onChange={(e) => dataHandler(e)}
                id="pet-type"
                required
              >
                <option value="none">Select Pet Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="package" className="fw-bold mb-2">
                Package
              </label>
              <select
                className="form-select"
                name="package"
                value={data.package}
                onChange={(e) => dataHandler(e)}
                id="package"
                required
              >
                <option value="">Select Package</option>
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="date" className="fw-bold mb-2">
                Booking Date
              </label>
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={(e) => dataHandler(e)}
                className="form-control"
                id="date"
                required
              />
            </div>
            <div className="col-md-6 mt-4 ">
              <label htmlFor="time" className="fw-bold mb-2">
                Time Slot
              </label>
              <select
                className="form-select"
                name="time"
                value={data.time}
                onChange={(e) => dataHandler(e)}
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
            {/* <div className="col-md-6 mt-4 ">
              <label htmlFor="status" className="fw-bold mb-2">
                Status
              </label>
              <select
                className="form-select"
                name="status"
                value={data.status}
                onChange={(e) => dataHandler(e)}
                id="status"
                required
              >
                <option value="Incomplete">Incomplete Appointment </option>
                <option value="Completed">Appointment Completed Sucessfully</option>
              </select>
            </div> */}
            <div className="col-12 mt-4 ">
              <label htmlFor="message" className="fw-bold mb-2">
                Message{" "}
                <span className="fw-light text-secondary">(optional)</span>
              </label>
              <textarea
                className="form-control"
                name="message"
                value={data.message}
                onChange={(e) => dataHandler(e)}
                id="message"
                rows="4"
                placeholder="Enter any special requests or instructions"
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-bookappointment mt-4 w-25">
                Update Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
