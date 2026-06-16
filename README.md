# MongoDB + Node.js Student Management API

A simple, functional REST API built with Node.js, Express, and MongoDB. This project demonstrates basic CRUD operations and is designed to be managed visually using **MongoDB Compass**.

## 🚀 Features
- **RESTful API**: Create and Retrieve student records.
- **Mongoose ODM**: Structured data modeling with schema validation.
- **Environment Variables**: Secure configuration using `.env`.
- **Compass Friendly**: Optimized for visual database management.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Tools**: MongoDB Compass, Docker (for local DB)

---

## 📋 Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [MongoDB Compass](https://www.mongodb.com/products/compass) installed.
- [Docker](https://www.docker.com/) (optional, if you don't have MongoDB installed locally).

---

## ⚙️ Setup Instructions

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd learning_mongodb
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://localhost:27017/school_db
PORT=5000
```

### 3. Start MongoDB
If you don't have MongoDB running, you can start it using Docker:
```bash
docker run -d -p 27017:27017 --name mongodb mongo
```

### 4. Run the Server
```bash
# Production mode
npm start

# Development mode (with nodemon)
npm run dev
```

---

## 📡 API Endpoints

### Create a Student
**POST** `/students`
```bash
curl -X POST http://localhost:5000/students \
-H "Content-Type: application/json" \
-d '{"name":"Rubil","course":"Computer Science","age":24}'
```

### Get All Students
**GET** `/students`
```bash
curl http://localhost:5000/students
```

---

## 🧭 Using with MongoDB Compass
1. Open **MongoDB Compass**.
2. Connect to `mongodb://localhost:27017`.
3. Locate the `school_db` database.
4. Open the `students` collection to view, edit, or delete documents visually.

---

## 📂 Project Structure
```text
.
├── models/
│   └── Student.js    # Mongoose Schema
├── server.js         # Express Server & API Routes
├── .env              # Environment Variables
├── package.json      # Dependencies & Scripts
└── README.md         # Project Documentation
```
