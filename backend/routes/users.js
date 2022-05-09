const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersC')
// const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access

// router.get('/', userController.getFeedPosts);


router.get('/profile', userController.getUserPosts);

router.route('/favorites')
    .get(userController.getuserFavorites)
    .post(userController.addToFavPost)

router.get('/following', userController.followUser);

router.get('/feed', userController.getFollowedPosts);



module.exports = router;