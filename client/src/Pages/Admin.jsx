import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState([]);

  const changeStatus = async (id) => {
    try {
      const updatedData = data.map((val) => {
        if (val.id === id) {
          if (val.status === "Incomplete") {
            return { ...val, status: "Completed" }; // Update the status to "Completed"
          } else if (val.status === "Completed") {
            return { ...val, status: "Incomplete" }; // Update the status back to "Incomplete"
          }
        }
        return val;
      });
      // alert("Status Updated Successfully for ID : " + id);
      // console.log(data.filter((val) => val.id === id)[0]);
      const changeItem = updatedData.filter((val) => val.id === id)[0];
      console.log(changeItem);
      await axios.put("http://127.0.0.1:3001/appointments/"+ id, changeItem);
      // console.log("Status Updated Successfully for ID : " + id + " to " + updatedData.filter((val) => val.id === id)[0].status);
      
      setData(()=>updatedData);
      // alert("Status Updated Successfully for ID : " + id);
      console.log("Status Updated Successfully for ID : " + id);
    } catch (err) {
      console.log("Error Occurred while updating status: " + err);
      alert("Error Occurred while updating status: " + err);
    }
  };

  //API Calling
  const FetchData = async () => {
    const result = await axios.get("http://127.0.0.1:3001/appointments");
   
    // setstate to data
    setData(result.data);
  };
  //API Calling
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

 

  return (
    

    <>
      <h1 className="text-center">Admin Dashboard</h1>

      <div className="container-fluid mt-5 z-0">
        <div className="row p-3 ">
          {/* Pending Appointments */}
          
          <div className="col-sm-6 p-3  border border-2 border-secondary rounded">
            <div className="row ">
              <h2 className="text-center">Pending Appointments</h2>
              {data.filter((val) => val.status === "Incomplete").length === 0 ? (
                <p className="text-center text-muted">No pending appointments.</p>
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
                            <NavLink className="text-light text-decoration-none" to={`/update/${val.id}`}>Update</NavLink> 
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
                          <button
                            className="btn btn-danger fw-bold mx-auto"
                            onClick={() => changeStatus(val.id)}
                          >
                            Change Status
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
              <h2 className="text-center">Completed Appointments</h2>
              {data.filter((val) => val.status === "Completed").length === 0 ? (
                <p className="text-center text-muted">No completed appointments.</p>
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
                        <div className="card-footer w-100">
                          <button className="btn btn-primary fw-bold me-1">
                            <NavLink className="text-light text-decoration-none" to={`/update/${val.id}`}>Update</NavLink> 
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
                          <button
                            className="btn btn-danger fw-bold mx-auto "
                            onClick={() => changeStatus(val.id)}
                          >
                            Change Status
                          </button>
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

export default Admin;
