const express = require('express');
const router = express.Router();
const postsContoller = require('../controllers/postC')
const authorization = require("../middleware/authorization")
const upload = require("../middleware/multer")


router.get('/', authorization.checkAuthenticated, postsContoller.getAllPosts)

router.post('/new', upload.single("image"),authorization.checkAuthenticated, postsContoller.createPost)
router.post('/delete/:postID', authorization.checkAuthenticated, postsContoller.deletePost) //must also remove id from user collection


module.exports = router;