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

## 🧪 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/pet-grooming-app.git
cd pet-grooming-app

```
### 2. Set up the backend

```bash
cd server
npm install

```
### 🔐 .env Setup (Backend)

Create a `.env` file inside your `server` folder and add the following:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=grooming
JWT_SECRET=yourSecretKey
HOST=localhost
PORT=3001
```
###  Start the backend:

```bash
npm start

```
### 3. Set up the frontend

```bash
cd ../client
npm install
npm start
```
## 🤝 Contributing

Have a cool idea or improvement?  
Feel free to **fork the repo**, make changes, and **submit a pull request**.  
**Contributions are always welcome!**

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙋‍♂️ Developed By

**Pranav Bansode**  
💼 Full Stack Developer  
📫 [pranavbansode8421@gmail.com](mailto:pranavbansode8421@gmail.com)  


```
