const express = require('express');
const router = express.Router();
const postsContoller = require('../controllers/postC')

router.get('/', postsContoller.getAllPosts)

router.post('/new', postsContoller.createPost)
router.post('/delete/:postID', postsContoller.deletePost)


module.exports = router;