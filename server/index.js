
const express = require("express");
const app = express();
const cors = require("cors");

const allowedOrigins = [

  "http://localhost:3000", //local url
  ""    // deployed frontend url
]
const authRoutes = require("./routes/auth"); // Import and use auth routes
require("dotenv").config();




//Middlewares
app.use(express.json()); // Parse JSON bodies
app.use(express.static("public")); // Serve static files from the 'public' directory
app.use(cors({
  origin: "*", //this is temporary it allows all urls but when we deploy frontend use allowedOrigins

  credentials:true
})); // Enable CORS for all routes
app.use("/api/auth", authRoutes); //

const db = require("./config/connection"); // Import the database connection

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
  res.send("this is backend server");
});
app.get("/appointments", (req, res) => {
  const q = "SELECT * FROM appointments";
  db.query(q, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});
app.get("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;

  const q = "SELECT * FROM appointments WHERE id = ?";
  db.query(q, [appointmentId], (err, data) => {
    if (err) {
      return res.status(500).json("Database error: " + err);
    } else if (data.length === 0) {
      return res.status(404).json("Appointment not found");
    } else {
      return res.json(data[0]); // Return single object, not array
    }
  });
});

app.post("/appointments", (req, res) => {
  const q =
    "INSERT INTO appointments (`userid`,`ownerName`,`email`,`contact`,`petName`,`petType`,`package`,`amount`,`date`,`time`,`message`,`status`) VALUES (?)";
  const values = [
    req.body.userid,
    req.body.ownerName,
    req.body.email,
    req.body.contact,
    req.body.petName,
    req.body.petType,
    req.body.package,
    req.body.amount,
    req.body.date,
    req.body.time,
    req.body.message,
    req.body.status || "Incomplete", // Default status if not provided
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.json("Appointment has been created successfully");
    }
  });
});

app.delete("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;
  const q = "DELETE FROM appointments WHERE id = ?";
  db.query(q, [appointmentId], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Appointment has been deleted successfully");
    }
  });
});

app.put("/appointments/:id", (req, res) => {
  const appointmentId = req.params.id;

  const q =
    "UPDATE appointments SET `ownerName`= ?, `email`= ?, `contact`= ?, `petName`= ?, `petType`= ?, `package`= ?, `amount`= ?, `date`= ?, `time`= ?, `message`= ?, `status`= ? WHERE `id` = ?";
  const values = [
    req.body.ownerName,
    req.body.email,
    req.body.contact,
    req.body.petName,
    req.body.petType,
    req.body.package,
    req.body.amount,
    req.body.date,
    req.body.time,
    req.body.message,
    req.body.status || "Incomplete",
    appointmentId,
  ];

  db.query(q, [...values, appointmentId], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Appointment has been updated successfully");
    }
  });
});

// for contactus data display
app.get("/contactus", (req, res) => {
  const q = "SELECT * FROM contactus";
  db.query(q, (err, data) => {
    if (err) {
      return res.json("Error Occured While fetching Data" + err);
    } else {
      console.log(data);
      return res.json(data);
    }
  });
});

//for contactus data store in db
app.post("/contactus", (req, res) => {
  const q =
    "INSERT INTO contactus (`name`, `email`, `subject`, `message`) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.subject,
    req.body.message,
  ];

  db.query(q, values, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json("Contact us Message has been saved successfully !!!");
    }
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
