Here is the same style **for your v5 setup**, clean, structured, and in one Markdown file.

---

# **Simple Node API (v5 – Courses CRUD + Auth + Roles)**

## **1. Initialize the Project**

```bash
npm init -y
```

---

## **2. Install Dependencies**

### **Backend Dependencies**

```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
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

## **3. Add Script to `package.json`**

```json
"scripts": {
  "start": "node index.js",
  "run:dev": "nodemon index.js"
}
```

---

## **4. Environment Variables**

Create a `.env` file:

```
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/simple_api_v5
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d
ROLES=ADMIN,MANAGER
```

Enable dotenv in your main file:

```
require('dotenv').config();
```

---

## **5. Project Structure (v5)**

```
Simple_Node_API/
│
├── controllers/
│   ├── auth.controller.js
│   └── courses.controller.js
│
├── middlewares/
│   ├── asyncWrapper.js
│   ├── verifyToken.js
│   └── verifyRoles.js
│
├── models/
│   ├── user.model.js
│   └── course.model.js
│
├── routes/
│   ├── auth.routes.js
│   └── courses.routes.js
│
├── utils/
│   ├── appError.js
│   └── httpStatusText.js
│
├── index.js
├── .env
├── package.json
```

### **New Features in v5**

* Roles system (ADMIN, MANAGER)
* Route protection using token + role middleware
* Courses CRUD operations
* Better async error handling
* Improved validation and response structure
* Global error handler

---

## **6. Run the Server**

```bash
npm run run:dev
```

Expected:

```
MongoDB Connected...
Server running on port 5000...
[ 'ADMIN', 'MANAGER' ]
```

---

## **7. API Overview**

### **Base URL**

```
http://localhost:5000/api
```

---

## **8. Authentication Routes**

### **Register**

POST `/api/auth/register`

### **Login**

POST `/api/auth/login`

Returns a JWT token.

---

## **9. Courses Routes (Protected + Role-Based)**

### **Get All Courses**

GET `/api/courses`

### **Create Course** (ADMIN or MANAGER)

POST `/api/courses`

### **Update Course** (ADMIN or MANAGER)

PUT `/api/courses/:id`

### **Delete Course** (ADMIN only)

DELETE `/api/courses/:id`

Headers required for all:

```
Authorization: Bearer YOUR_TOKEN
```

---

## **10. Middleware Summary**

### **verifyToken**

Extracts and verifies JWT → attaches user → calls next.

### **verifyRoles**

Checks if user role matches the allowed roles for the route.

### **asyncWrapper**

Catches async errors without using try/catch everywhere.

---

## **11. Custom Error Handling**

Errors use:

```
appError.create("Message", 400, "fail");
```

Automatically handled by the global handler.

---

If you want, I can also generate the exact **README.md file** for your GitHub repo.
