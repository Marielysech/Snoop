const express = require('express');
const router = express.Router();
const authController = require('../controllers/authC')
const authorization = require("../middleware/authorization")
const upload = require("../middleware/multer")


router.post('/register', authorization.checkNotAuthenticated, upload.single("image"), authController.registerNewUser);

router.post('/login', authorization.checkNotAuthenticated, authController.loginUser);

router.get('/logout', authorization.checkAuthenticated, authController.logoutUser);

router.get('/delete', authorization.checkAuthenticated, authController.deleteUser);

router.post('/update', authorization.checkAuthenticated, upload.single("image"), authController.updateUser);



module.exports = router;