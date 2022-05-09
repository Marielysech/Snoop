const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersC')
// const authorization = require("../middleware/authorization")

//TODO : add authorization for limited access


router.get('/feed', userController.getFollowedPosts);

router.route('/:userName')
    .get(userController.getUserPosts)
    .post(userController.followUser)

router.get('/favorites',userController.getuserFavorites)
router.post('/favorites/:id',userController.likePost)






module.exports = router;