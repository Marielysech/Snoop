const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersC')
// const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access

router.get('/', userController.getFeedPosts);


router.get('/profile', userController.getUserPosts);

router.get('/favorites', userController.getuserFavorites);

router.route('/settings')
    .delete(authController.deleteUserAccount)
    .post(authController.updateUserInfo)




module.exports = router;