const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersC')
// const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access


router.get('/feed', userController.getFollowedPosts);

router.get('/:userName', userController.getUserPosts);

router.route('/favorites')
    .get(userController.getuserFavorites)
    .post(userController.likePost)

router.get('/following', userController.followUser);




module.exports = router;