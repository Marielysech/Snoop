const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersC')
const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access


router.get('/feed', authorization.checkAuthenticated, userController.getFollowedPosts);
router.get('/search', authorization.checkAuthenticated, userController.searchUser);

router.route('/:userName')
    .get(authorization.checkAuthenticated, userController.getUserPosts)
    .post(authorization.checkAuthenticated, userController.followUser)

router.get('/favorites',authorization.checkAuthenticated, userController.getuserFavorites)
router.post('/favorites/:id',authorization.checkAuthenticated, userController.likePost)






module.exports = router;