### 1. Clone the repository

```bash
git clone https://github.com/BasiL21777/Simple_Node_API.git
```

---

### 2. Initialize a Node.js project (if not already done)

```bash
npm init -y
```

This generates a `package.json` file with default values.

---

### 3. Install dependencies

* Install Express, express-validator, and morgan:

```bash
npm install express express-validator morgan
```

* Install `nodemon` as a development dependency:

```bash
npm install --save-dev nodemon
```

---

### 4. Update the `package.json` scripts

Add the following under `"scripts"`:

```json
"scripts": {
  "run:dev": "nodemon index.js"
}
```

---

### 5. Project structure

Ensure the following structure is used:

```
Simple_Node_API/
│
├── data/
│   └── courses.js
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

### 6. Run the server

```bash
npm run run:dev
```

Expected output:

```
[nodemon] starting `node index.js`
Listening on 5000...
```

---

### 7. Import the Postman collection

1. Open **Postman**.
2. In the top-left corner, click **Import**.
3. Choose **File** as the import method.
4. Select the file `Courses_API.postman_collection.json` from your project directory.
5. Click **Import** to add the collection to Postman.
6. Once imported, you will see the `Courses API` collection in the sidebar.
7. Expand the collection and run the requests (GET, POST, PATCH, DELETE) directly against `http://localhost:5000/api/courses`.

