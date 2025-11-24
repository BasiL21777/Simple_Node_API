# Simple Node API (MongoDB Version)

## 1. Clone the repository

```bash
git clone https://github.com/BasiL21777/Simple_Node_API.git
```

---

## 2. Initialize a Node.js project (if not already done)

```bash
npm init -y
```

This generates a `package.json` file with default values.

---

## 3. Install dependencies

Install Express, express-validator, and morgan:

```bash
npm install express express-validator morgan
```

Install `nodemon` as a development dependency:

```bash
npm install --save-dev nodemon
```

Install `mongoose`:

```bash
npm i mongoose --save
```

---

## 4. Update `package.json` scripts

Add the following under `"scripts"`:

```json
"scripts": {
  "run:dev": "nodemon index.js"
}
```

---

## 5. Add your MongoDB URL

In `index.js`, replace `<MongoDB URL>` with your actual MongoDB connection string.

---

## 6. Project Structure

```
Simple_Node_API/
│
├── models/
│   └── model.js
│
├── controllers/
│   └── controller.js
│
├── routes/
│   └── routes.js
│
├── Validators/
│   └── validator.js
│
├── index.js
├── package.json
```

---

## 7. Run the server

```bash
npm run run:dev
```

Expected output:

```
[nodemon] starting `node index.js`
MongoDB Connected...
Listening on 5000...
```

---

## 8. Import the Postman Collection

1. Open **Postman**
2. Click **Import** (top-left)
3. Select `Courses_API.postman_collection.json`
4. Click **Import**
5. Use the API endpoints from:

```
http://localhost:5000/api/courses
```

Available requests include:

* **GET** all courses
* **POST** create course
* **PATCH** update course
* **DELETE** remove course

---

