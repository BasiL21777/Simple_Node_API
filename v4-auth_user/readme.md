# **Simple Node API (v4 – User Authentication with MongoDB)**

## **1. Clone the Repository**

```bash
git clone https://github.com/BasiL21777/Simple_Node_API.git
```

---

## **2. Initialize the Node.js Project (if needed)**

```bash
npm init -y
```

---

## **3. Install Dependencies (v4)**

### **Backend Dependencies**

```bash
npm install express mongoose morgan cors dotenv bcryptjs jsonwebtoken
```

### **Validation & Error Handling**

```bash
npm install express-validator
```

### **Development Tools**

```bash
npm install --save-dev nodemon
```

---

## **4. Update `package.json` Scripts**

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

---

## **5. Environment Variables**

Create a `.env` file:

```
PORT=5000
MONGO_URL=your_mongodb_url_here
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=30d
```

Enable dotenv in `index.js`:

```js
require('dotenv').config();
```

---

## **6. Project Structure (v4)**

```
Simple_Node_API/
│
├── controllers/
│   └── user.controller.js
│
├── middlewares/
│   ├── asyncWrapper.js
│   ├── verifyToken.js
│   └── user.validator.js
│
├── models/
│   └── user.model.js
│
├── routes/
│   └── user.routes.js
│
├── utils/
│   ├── appError.js
│   └── httpStatusText.js
│
├── index.js
├── .env
├── package.json
```

### **New Features in v4**

* Full user authentication (Register/Login)
* Password hashing using **bcryptjs**
* Token-based authentication with **JWT**
* Middleware `verifyToken` for protected routes
* Custom error handling using `AppError`
* Async wrapper for cleaner controllers
* Unique email validation with readable error messages
* Better modular structure

---

## **7. Run the Server**

```bash
npm run dev
```

Expected output:

```
MongoDB Connected...
Server running on port 5000...
```

---

## **8. API Usage**

Base URL:

```
http://localhost:5000/api/users
```

---

## **9. Authentication Routes (v4)**

### **1) Register**

**POST** `/api/users/register`

**Body:**

```json
{
  "name": "Bassel",
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

### **2) Login**

**POST** `/api/users/login`

**Body:**

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

**Returns:**

```json
{
  "status": "success",
  "data": {
    "token": "JWT_TOKEN_HERE"
  }
}
```

---

### **3) Get Logged-In User (Protected route)**

**GET** `/api/users/me`

Headers:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## **10. Middleware Overview**

### **asyncWrapper**

Used to avoid repetitive try/catch inside controllers.

### **verifyToken**

Extracts JWT from headers → verifies → attaches decoded user → continues.

---

## **11. Custom Error Handling**

All errors are generated using:

```js
appError.create("Message", 400, "fail");
```

And automatically captured by the global error handler.

---

