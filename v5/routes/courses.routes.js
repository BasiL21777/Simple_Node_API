const express=require('express')
const validators=require("../middelwares/courses.validator")
const controls=require("../controllers/courses.controller")
const router=express.Router();
const verifyToken=require("../middelwares/verfiyToken")
const allowedTo=require("../middelwares/allowedTo")
const {ADMIN,MANAGER,USER}=require("../utils/userRoles")


router.route("/")
.post(validators.validatePostCourse,controls.CreateCourse)
.get(controls.GetAllCourses);


router.route("/:courseID")
.get(controls.GetCourseDetails)
.patch( validators.validatePatchCourse,controls.PathCourse)
.delete(verifyToken,allowedTo(ADMIN,MANAGER),controls.DeleteCourse);

module.exports=router;
