const express=require('express')
const userController=require('../controllers/users.controller')
const router=express.Router();
const verfiyToken=require("../middelwares/verfiyToken")


router.route("/")
.get(verfiyToken,userController.getAllUsers);

router.route("/register")
.post(userController.register);

router.route("/login")
.post(userController.login);



module.exports=router;
