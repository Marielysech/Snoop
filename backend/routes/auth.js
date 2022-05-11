const express = require('express');
const router = express.Router();
const authController = require('../controllers/authC')
const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access

router.post('/register', authorization.checkNotAuthenticated, authController.registerNewUser);

router.post('/login', authorization.checkNotAuthenticated, authController.loginUser);

router.get('/logout', authorization.checkAuthenticated, authController.logoutUser);

router.get('/delete', authorization.checkAuthenticated, authController.deleteUser);

router.post('/update', authorization.checkAuthenticated, authController.updateUser);



module.exports = router;