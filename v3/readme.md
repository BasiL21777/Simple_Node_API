
# Simple Node API (v3 – MongoDB Version)

## 1. Clone the Repository

```bash
git clone https://github.com/BasiL21777/Simple_Node_API.git
````

---

## 2. Initialize the Node.js Project (if needed)

```bash
npm init -y
```

This generates a default `package.json`.

---

## 3. Install Dependencies

Install backend dependencies:

```bash
npm install express mongoose morgan express-validator cors dotenv
```

Install development tools:

```bash
npm install --save-dev nodemon
```

---

## 4. Update `package.json` Scripts

Add the following script:

```json
"scripts": {
  "run:dev": "nodemon index.js"
}
```

---

## 5. Environment Variables

Create a `.env` file in the project root:

```
PORT=5000
MONGO_URL=your_mongodb_url_here
```

Enable dotenv in `index.js`:

```
require('dotenv').config();
```

---

## 6. Project Structure (v3)

```
Simple_Node_API/
│
├── controllers/
│   └── course.controller.js
│
├── middelwares/
│   ├── courses.async_wrappers.js
│   └── courses.validator.js
│
├── models/
│   └── course.model.js
│
├── routes/
│   └── course.routes.js
│
├── utils/
│   ├── appError.js
│   └── httpStatusText.js
│
├── simple_frontend/
│   ├── index.html
│   └── script.js
│
├── index.js
├── .env
├── package.json
```

### New Features in v3

* Async wrapper middleware for cleaner controllers
* Custom `AppError` class for structured error handling
* Global error-handling middleware
* Route validators with express-validator
* CORS support for frontend API requests
* dotenv integration for environment configuration
* Simple frontend for quick browser testing
* Cleaner and modular structure

---

## 7. Run the Server

```bash
npm run run:dev
```

Expected output:

```
[nodemon] starting `node index.js`
MongoDB Connected...
Server running on port 5000...
```

---

## 8. API Usage

### Base URL

```
http://localhost:5000/api/courses
```

### Available Endpoints

* **GET** → Get all courses
* **GET** → Get a course by ID
* **POST** → Create a new course
* **PATCH** → Update a course
* **DELETE** → Delete a course

---

## 9. Simple Frontend (Optional)

Open:

```
simple_frontend/index.html
```

This page allows basic testing of the API directly from your browser.

---


