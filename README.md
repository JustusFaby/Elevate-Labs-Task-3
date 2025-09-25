# Elevate-Labs-Task-3
# 📚 REST API to Manage a List of Books Using Node.js and Express.

This project is a simple RESTful API built with **Node.js** and **Express.js** that manages a list of books. It demonstrates how to perform basic CRUD (Create, Read, Update, Delete) operations using HTTP methods.

---

## 🚀 Features
- **GET /books** – Retrieve all books  
- **POST /books** – Add a new book  
- **PUT /books/:id** – Update an existing book’s title or author  
- **DELETE /books/:id** – Delete a book by ID  

---

## 🛠️ Tech Stack
- **Node.js** – Server runtime  
- **Express.js** – Web framework  
- **Postman** – API testing  

---

## 📂 File Overview  
- `server.js` – Main server file containing the API endpoints for GET, POST, PUT, and DELETE requests.

---

## 🖼️ Screenshots Overview  

### 1. **DELETE Request (Screenshot 3)**  
- URL: `http://localhost:3000/books/1`  
- Method: **DELETE**  
- Shows successful deletion of a book with the JSON response:  
```json
{ "message": "This book is deleted" }
```

### 2. **PUT Request (Screenshot 4)**  
- URL: `http://localhost:3000/books/3`  
- Method: **PUT**  
- Shows an update to the `author` field of a book with the JSON response reflecting the updated book details.

---

## ▶️ How to Run
1. Install dependencies (if any):  
   ```bash
   npm install express
   ```
2. Run the server:  
   ```bash
   node server.js
   ```
3. Use Postman to test endpoints at `http://localhost:3000`.
