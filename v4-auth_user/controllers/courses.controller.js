const { validationResult } = require("express-validator");
const {FAIL,ERROR,SUCCESS}=require('../utils/httpStatusText')
const Course = require('../models/courses.model');
const asyncWrapper=require('../middelwares/courses.async_wrappers');
const appError=require('../utils/appError')



const GetAllCourses = asyncWrapper(
	async (req, res) => {
	const query=req.query;
	// console.log(query);
	const limit=query.limit||10;
	const page=query.page||1;
	const courses = await Course.find({},{"__v":false}).limit(limit).skip(limit*(page-1));
	const count = await Course.countDocuments();
	res.status(200).json({status:SUCCESS,data:{count:count,courses:courses}});
}
);

const GetCourseDetails = asyncWrapper(
	async (req, res,next) => {
	const courseID = req.params.courseID;
		const course = await Course.findById(courseID,{"__v":false});
	if (course) {
		res.json({status:SUCCESS,data:{course}});
	} else {
		const err=appError.create("Course Not Found",404,FAIL);
		return next(err); // the global error handler will catch it
		// res.status(404).json({status:FAIL,data:{course:null}})
	}
}
);

const CreateCourse =asyncWrapper(
	 async (req, res,next) => {
  if (req.method === "POST") {
    if (!req.body) {
      return res.status(400).json({ status: FAIL, data: { error: "Request has no body" } });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
		const err=appError.create(errorr.array(),400,FAIL);
		next(err)
    //   return res.status(400).json({ status: FAIL, data: errors.array() });
    }

    // Force float
    req.body.price = parseFloat(req.body.price);

    const newCourse = new Course(req.body);
    await newCourse.save();

    return res.status(201).json({ status: SUCCESS, data: { course: newCourse } });
  }
}
);

const PathCourse = asyncWrapper(
	async(req, res,err) => {
	const courseID = req.params.courseID;
	const updatedCourse=await Course.findByIdAndUpdate(courseID,{$set:{...req.body}})
	res.status(200).json({status:SUCCESS,data:{course:updatedCourse}});
}
);


const DeleteCourse = asyncWrapper(
	async(req, res,next) => {
	const courseID = req.params.courseID;
	const course = await Course.findById(courseID);
	if (course) {
		await Course.deleteOne({_id:courseID});
		res.status(200).json({status:SUCCESS,data:null});
	} else {
		const err=appError.create("course not found",404,FAIL);
		next(err);
		// res.status(404).json({status:FAIL,data:{course:"course not found"}})}
	}}
);

module.exports = {
	GetAllCourses,
	GetCourseDetails,
	CreateCourse,
	PathCourse,
	DeleteCourse
}
