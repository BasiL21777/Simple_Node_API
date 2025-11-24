const { validationResult } = require("express-validator");
let Course = require('../models/courses.model');

const GetAllCourses = async (req, res) => {
	const newCourse = new Course({ title: "Node Basics", price: "100" });
	await newCourse.save();
	const courses = await Course.find();
	const count = await Course.countDocuments();
	console.log("Courses count:", count);
	res.status(200).json(courses);
};

const GetCourseDetails = async (req, res) => {
	const courseID = req.params.courseID;

	try{
	const course = await Course.findById(courseID);
	if (course) {
		res.json(course);
	} else {
		res.status(404).json({ msg: "Course Not Found" })
	}} catch(err){
		return res.status(400).json({ error: "Invalid Obj ID"});
	}
};

const CreateCourse = async (req, res) => {
	if (req.method === "POST") {
		if (req.body) {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				console.log(errors);
				return res.status(400).json({ errors: errors.array() });
			}
			else {
				req.body['price'] = +req.body['price']
				const newCourse = new Course(req.body);
				await newCourse.save();
				return res.status(201).json(newCourse);
			}
		}
		return res.status(400).json({ errors: "has no body"});
	}
};

const PathCourse = async(req, res) => {
	const courseID = req.params.courseID;
	try {
	const updatedCourse=await Course.findByIdAndUpdate(courseID,{$set:{...req.body}})
	res.status(200).json(updatedCourse);
	} catch (error) {
	return res.status(404).json({error:"Not Found"})
	}
}


const DeleteCourse = async(req, res) => {
	const courseID = req.params.courseID;
	try {
	await Course.deleteOne({_id:courseID});
	res.status(200).json({ msg: "Deleted Successfully" });
	} catch (error) {
	return res.status(404).json({err:"Not Found"})
	}
}

module.exports = {
	GetAllCourses,
	GetCourseDetails,
	CreateCourse,
	PathCourse,
	DeleteCourse
}
