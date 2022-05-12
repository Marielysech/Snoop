const express = require('express');
const router = express.Router();
const authController = require('../controllers/authC')
const authorization = require("../middleware/authorization")

//img upload related import
const { v4: uuidv4 } = require('uuid'); //to generate secure id
const multer = require('multer');
const path = require("path");

//image upload fct

var uniqueId = uuidv4()

// setting file destination for storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../../frontend/public/uploads"));

    },
    filename: function (req, file, cb) {
      cb(null, uniqueId  + file.originalname);
    },
});

// checking img format

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  //middleware fct
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
});

//auth routes

router.post('/register', authorization.checkNotAuthenticated, upload.single("image"), authController.registerNewUser);

router.post('/login', authorization.checkNotAuthenticated, authController.loginUser);

router.get('/logout', authorization.checkAuthenticated, authController.logoutUser);

router.get('/delete', authorization.checkAuthenticated, authController.deleteUser);

router.post('/update', authorization.checkAuthenticated, upload.single("image"), authController.updateUser);



module.exports = router;