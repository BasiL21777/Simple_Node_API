const express = require('express');
const morgan = require('morgan');
const coursesRouter = require('./routes/courses.routes.js'); // <-- no { router }
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use('/api/courses/', coursesRouter);
// app.use('/api/users', usersRouter);

app.listen(5000, () => {
  console.log("Listening on 5000...");
});
