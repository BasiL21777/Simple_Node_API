const jwt=require('jsonwebtoken');
require('dotenv').config()

module.exports=async({email,id})=>{
	return await jwt.sign(
		{email:email,
		id:id},
		process.env.JWT_SECRET_KEY,
		{expiresIn:'1m'});
};
