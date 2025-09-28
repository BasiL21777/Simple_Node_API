const express=require('express')
const validators=require("../Validators/courses.validator")
const controls=require("../controllers/courses.controller")
const router=express.Router();



router.route("/")
.post(validators.validatePostCourse,controls.CreateCourse)
.get(controls.GetAllCourses);


router.route("/:courseID")
.get(controls.GetCourseDetails)
.patch( validators.validatePatchCourse,controls.PathCourse)
.delete(controls.DeleteCourse);

module.exports=router;
