require('dotenv').config()
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const coursesRouter = require('./routes/courses.routes.js'); // <-- no { router }
const usersRouter = require('./routes/users.routes.js');
const {ERROR}=require('./utils/httpStatusText')
const app = express();
const cors = require('cors');
const mongoose=require('mongoose');

// console.log(process);

const url = process.env.MONGO_URL ;

mongoose.connect(url).then(()=>{
  console.log("Mongo BD Started ... ");
});



app.use(cors());
app.use(express.json());
app.use('/api/courses/', coursesRouter);
app.use('/api/users/', usersRouter);
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

// global middleware handel not found routs wildcard
app.all(/.*/,(req,res,next)=>{
  res.status(404).json({status:ERROR,msg:"this resource is not available"});
});

// global middleware handel errors
app.use((err,req,res,next)=>{
  res.status(err.statusCode||500).json({status:err.statusText||ERROR,msg:err.message,data:null})
});




const port=process.env.PORT;
app.listen(port||5000, () => {
  console.log("Listening on 5000...");
});
