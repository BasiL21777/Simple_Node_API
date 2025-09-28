let {courses}=require("../data/courses.js")
const { validationResult } = require("express-validator");

const GetAllCourses=(req, res) => {res.json(courses);};

const GetCourseDetails= (req, res) => {
	console.log(req.params); // { courseID: '1' }
	// + to enforce be num
	const courseID = +req.params.courseID;
	const course = courses.find((course) => course.id === courseID);
	if (course) {
		res.json(course);
	} else {
		res.status(404).json({ msg: "Course Not Found" })
	}
}

const CreateCourse=(req, res) => {
		console.log(req.body);// undefined (we want use body parser middleware)
		if (req.method === "POST") {
			if (req.body) {
				const errors = validationResult(req);
				if (!errors.isEmpty()) {
					console.log(errors);
					return res.status(400).json({ errors: errors.array()});
				}
					req.body['price']=+req.body['price']
					courses.push({ id: courses.length + 1, ...req.body});
					res.status(201);
					res.json(courses);

			}
		}
	};

const PathCourse= (req, res) => {
  const courseID = +req.params.courseID;
  const index = courses.findIndex((course) => course.id === courseID);

  if (index === -1) {
    return res.status(404).json({ msg: "Not Found" });
  }

  courses[index] = { ...courses[index], ...req.body };
  res.status(200).json(courses[index]);
}


const DeleteCourse=(req,res)=>{
	const courseID=+req.params.courseID;
	// it means courses where not equal ID
	courses=courses.filter((course)=>course.id!==courseID);
	res.status(200).json({msg:"Deleted Successfully"});
}

module.exports={
	GetAllCourses,
	GetCourseDetails,
	CreateCourse,
	PathCourse,
	DeleteCourse
}
