import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Myappointments = () => {
  const [data, setData] = useState([]);

  const userid = parseInt(localStorage.getItem("id")); // Ensure it's a number

  const FetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:3001/appointments");
      const allAppointments = result.data;

      

      // Filter only the appointments of the logged-in user
      const userAppointments = allAppointments.filter(
        (appointment) => appointment.userid === userid
      );

      setData(userAppointments);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);
  const deleteData = async (id) => {
    try {
      const result = data.filter((val) => val.id !== id);
      setData(result);
      await axios.delete("http://127.0.0.1:3001/appointments/" + id);
      alert("Data Deleted Successfully with ID : " + id);
    } catch (err) {
      console.log("Error Occured : " + err);
    }
  };
    if (!userid) {
      return (
        <h3 className="text-center text-danger mt-5">
          Please login to view your appointments.
        </h3>
      );
    }
  return (
    <>
      <h1 className="text-center">My Appointments</h1>

      <div className="container-fluid mt-5 z-0">
        <div className="row p-3 ">
          {/* upcoming Appointments */}

          <div className="col-sm-6 p-3  border border-2 border-secondary rounded">
            <div className="row ">
              <h2 className="text-center">My Upcoming Appointments</h2>
              {data.filter((val) => val.status === "Incomplete").length ===
              0 ? (
                <p className="text-center text-muted">
                  No Upcoming appointments.
                </p>
              ) : (
                data
                  .filter((val) => val.status === "Incomplete")
                  .map((val, index) => (
                    <div className="col-lg-6 col-md-12 mt-4 mb-4" key={index}>
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Booking ID: {val.id}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">
                            Customer Name: {val.ownerName}
                          </h6>
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            User Id: {val.userid}
                            <br />
                            Pet Name: {val.petName}
                            <br />
                            Pet Type: {val.petType}
                            <br />
                            Package: {val.package}
                            <br />
                            Amount: {val.amount}
                            <br />
                            Date: {val.date}
                            <br />
                            Time: {val.time}
                            <br />
                            Contact: {val.contact}
                            <br />
                            Email ID: {val.email}
                            <br />
                            Message: {val.message}
                          </p>
                          <p className="fw-bold fs-5">
                            Status:
                            <span className="text-danger">{val.status}</span>
                          </p>
                        </div>
                        <div className="card-footer w-100">
                          <button className="btn btn-primary fw-bold me-1">
                            <NavLink
                              className="text-light text-decoration-none"
                              to={`/update/${val.id}`}
                            >
                              Update
                            </NavLink>
                          </button>
                          <button
                            className="btn btn-primary fw-bold me-1"
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Are you sure you want to delete ID: ${val.id}?`
                                )
                              ) {
                                deleteData(val.id);
                              }
                            }}
                          >
                            Delete
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>

          {/* Completed Appointments */}
          <div className="col-sm-6 p-3 border border-2 border-secondary rounded">
            <div className="row">
              <h2 className="text-center">My Completed Appointments</h2>
              {data.filter((val) => val.status === "Completed").length === 0 ? (
                <p className="text-center text-muted">
                  No completed appointments.
                </p>
              ) : (
                data
                  .filter((val) => val.status === "Completed")
                  .map((val, index) => (
                    <div className="col-lg-6 col-md-12 mt-4 mb-4" key={index}>
                      <div className="card">
                        <div className="card-header">
                          <h5 className="card-title">Booking ID: {val.id}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">
                            Customer Name: {val.ownerName}
                          </h6>
                        </div>
                        <div className="card-body">
                          <p className="card-text">
                            User Id: {val.userid}
                            <br />
                            Pet Name: {val.petName}
                            <br />
                            Pet Type: {val.petType}
                            <br />
                            Package: {val.package}
                            <br />
                            Amount: {val.amount}
                            <br />
                            Date: {val.date}
                            <br />
                            Time: {val.time}
                            <br />
                            Contact: {val.contact}
                            <br />
                            Email ID: {val.email}
                            <br />
                            Message: {val.message}
                          </p>
                          <p className="fw-bold fs-5">
                            Status:{" "}
                            <span className="text-success">{val.status}</span>
                          </p>
                        </div>
                       
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myappointments;
