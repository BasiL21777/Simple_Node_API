const mongoose =require('mongoose');


const courseSchema= new mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	price:{
		type:Number,
		required:true
	}
});
// note mongoose when compile the model will be Courses in collection
let Course=mongoose.model('Courses',courseSchema);


module.exports = Course;
