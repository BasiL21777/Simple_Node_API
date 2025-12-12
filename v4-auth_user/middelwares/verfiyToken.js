const jwt=require('jsonwebtoken');
const { FAIL } = require('../utils/httpStatusText');
require('dotenv');

const verifyToken=(req,res,next)=>{
	// console.log(req.headers);
	const authHeader=req.headers['Authorization']||req.headers['authorization'];
	if(!authHeader){
	return res.status(401).json({status:FAIL,msg:"Token Is Required",data:null});
	}
	//to skip Bearer
	const token=authHeader.split(' ')[1];
	// console.log(token);

	try {
	const decodedToken= jwt.verify(token,process.env.JWT_SECRET_KEY);
	return next();
	} catch (error) {
	return res.status(401).json({status:FAIL,msg:"Invalid Token",data:null});
	}
}


module.exports=verifyToken;
