const User=require('../models/users.model')
const {FAIL,ERROR,SUCCESS}=require('../utils/httpStatusText')
const asyncWrapper=require('../middelwares/courses.async_wrappers');
const appError=require('../utils/appError');
const bcrypt=require('bcrypt');
const generateJWT=require('../utils/generateJWT');

const getAllUsers=asyncWrapper(
	async (req, res) => {
	const query=req.query;
	const limit=query.limit||10;
	const page=query.page||1;
	const users = await User.find({},{"__v":false,"password":false}).limit(limit).skip(limit*(page-1));
	const count = await User.countDocuments();
	res.status(200).json({status:SUCCESS,data:{count:count,users:users}});
}
);


const register=asyncWrapper(
	async (req, res,next) => {
		// when multer finish his job add files as property in req
	// console.log(req.file);

	const {firstName,lastName,email,password,role}=req.body;

		const oldUser= await User.findOne({email:email});
		if(oldUser){
			const err=appError.create("Email Already Exist",400,FAIL);
			return next(err);
		}


	const hashedPassword=await bcrypt.hash(password,salt=10)
	// console.log(hashedPassword);


	const newUser=new User(
		{firstName,
		lastName,
		email,
		password:hashedPassword,
		role,
		avatar:req.file.filename
		}
	);
	//generate web token
	const token=await generateJWT({email:newUser.email,id:newUser._id,role:newUser.role})
	await newUser.save();
	res.status(200).json({status:SUCCESS,
		data:{msg:"Successful Register",
		token:token
		}});
}
);


const login = asyncWrapper(
  async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(appError.create("Provide Email and Password", 400, FAIL));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(appError.create("Invalid email or password", 400, FAIL));
    }

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      return next(appError.create("Invalid email or password", 400, FAIL));
    }

    // Success
	const token=await generateJWT({email:user.email,id:user._id,role:user.role})
    res.json({
      status: SUCCESS,
      data: { message: "Logged in successfully",
		token:token
	   }
    });
  }
);


module.exports={
	getAllUsers,
	login,
	register
}
