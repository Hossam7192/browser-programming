# Lecture 9 — Backend + API

## 📌 Project Overview

This project demonstrates building a simple backend using Node.js and Express, creating API endpoints, and connecting them to a frontend using JavaScript fetch.

---

## 🎯 Features

* Node.js backend server
* Express framework
* API endpoint: `/api/message`
* API endpoint: `/api/student`
* Frontend connected to backend using fetch()
* JSON data handling
* CORS enabled for communication

---

## ⚙️ Technologies Used

* Node.js
* Express.js
* HTML
* JavaScript (fetch API)

---

## 🚀 How to Run the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the server

```bash
node server.js
```

### 3. Open the frontend

Open `index.html` in your browser.

---

## 🔗 API Endpoints

### 1. Get Message

```
http://localhost:3000/api/message
```

Response:

```json
{
  "message": "My first API works!",
  "course": "Browser Programming",
  "year": 2026
}
```

---

### 2. Get Student

```
http://localhost:3000/api/student
```

Response:

```json
{
  "name": "Hossam",
  "role": "Student"
}
```

---

## 🧠 Why Backend is Needed

We need a backend because the browser handles only the user interface, while the backend processes data, provides API endpoints, and manages server-side logic securely.

---

## 📁 Project Structure

```
lecture-9-backend/
│
├── server.js
├── index.html
├── script.js
├── package.json
├── package-lock.json
└── node_modules/
```

---

## ✅ Status

✔ Completed and working successfully
