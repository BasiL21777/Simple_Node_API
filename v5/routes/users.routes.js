const express = require('express')
const userController = require('../controllers/users.controller')
const router = express.Router();
const verfiyToken = require("../middelwares/verfiyToken")

const multer = require('multer');                 // FIXED
const appError = require('../utils/appError');    // FIXED

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("File: ", file);
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const fileName = `user_${Date.now()}.${ext}`;
        cb(null, fileName)
    }
});

const fileFilter = (req, file, cb) => {
    const imageType = file.mimetype.split("/")[0];
    if (imageType === 'image') {
        return cb(null, true);
    } else {
        return cb(appError.create("file must be image", 400), false);
    }
}

const upload = multer({
    storage: diskStorage,
    fileFilter
})

router.route("/")
    .get(verfiyToken, userController.getAllUsers);

router.route("/register")
    .post(upload.single('avatar'), userController.register);

router.route("/login")
    .post(userController.login);

module.exports = router;
