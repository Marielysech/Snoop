const express = require('express');
const router = express.Router();
const authController = require('../controllers/authC')
// const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access

router.post('/register', authController.registerNewUser);

router.post('/login', authController.loginUser);

router.get('/logout', authController.logoutUser);

router.get('/delete', authController.deleteUser);

router.post('/update', authController.updateUser);



module.exports = router;