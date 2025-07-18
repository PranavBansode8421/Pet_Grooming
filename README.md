# 🐾 Pet Grooming Booking System

Welcome to the **Pet Grooming Booking Web App** – a full-stack platform built with **React.js**, **Node.js**, **Express.js**, and **MySQL**. Users can easily book grooming appointments, and admins can manage appointments and messages with ease.

---

## 🚀 Features

### 👥 Role-Based Authentication
- Sign up/login with role-based redirection (`admin` or `user`)
- Passwords securely hashed with `bcrypt`
- Authentication handled with `JWT`
- Protected routes and access control

### 📅 Appointment Booking
- Book grooming services with pet details, date/time, and selected package
- Real-time form validation with visual feedback
- Auto-filled pricing based on selected package

### 🧑‍💼 Admin Dashboard
- View, update, delete, or mark appointments as completed
- Manage contact messages submitted by users
- Dashboard categorizes appointments (Pending / Completed)

### 📨 Contact Us
- Contact form for users to reach out
- Admin view of messages via dashboard

### 🔐 Session Handling
- Token-based login using localStorage
- Auto logout on token expiration
- Auto logout after inactivity using event listeners

---

## 🛠 Tech Stack

| Frontend       | Backend        | Database |
|----------------|----------------|----------|
| React.js       | Node.js        | MySQL    |
| React Router   | Express.js     |          |
| Axios          | JWT, bcrypt    |          |
| Bootstrap/CSS  |                |          |

---

## 📷 Screenshots

| User Booking Page | Admin Dashboard |
|-------------------|-----------------|
| ![Booking](public/screenshots/booking.png) | ![Admin](public/screenshots/admin.png) |

---

## 🧪 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/pet-grooming-app.git
cd pet-grooming-app
