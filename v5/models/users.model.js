const mongoose = require('mongoose');
const validator = require('validator');
const userRoles=require('../utils/userRoles');


const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      {
        validator: validator.isEmail,
        message: "Email format is invalid."
      },
      {
        validator: async function (value) {
          const count = await mongoose.models.User.countDocuments({ email: value });
          return count === 0;
        },
        message: "Email already exists. Please use another email."
      }
    ]
  },

  password: {
    type: String,
    required: true
  },
  token:{
    type: String,
  },
  role:{
    type:String,
    enum:[userRoles.ADMIN,userRoles.USER,userRoles.MANAGER],
    default:userRoles.USER
  },
  avatar:{
    type:String,
    default:'uploads/profile.jpg'
  }
});



module.exports = mongoose.model('User', userSchema);
