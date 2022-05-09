const userModel = require('../models/User')
const postModel = require('../models/Post')
const { use } = require('../routes/posts')


async function getFollowedPosts (req,res) {
    try {
    let userID = req.user._id;
    const posts = await userModel.find({_id: userID}).populate({
        path : "userAction.followedUsers",
        populate : {
          path : 'posts'
        }})

    console.log(posts)

    const followedUsersArray = req.user.userAction.followedUsers //this is an array of object, array of all users followed and their posts
    const followedPosts = []
    followedUsersArray.map(elem => followedPosts.push(elem.posts)) //elem.post must be an object of post   
    console.log(followedPosts)

    res.status(200).json({feedPosts: followedPosts})

    } catch(error) {
        console.log(error)
    }   

    //TODO in front: condition that if feedPost.lenght < 1 : "you don't have any post in your feed, go to explore -> add link to explore page"
}

async function  getUserPosts (req,res) {

    try {

    const user = await userModel.find({userName: req.params.userName}).populate("posts")
    res.status(200).json({userPosts: user.posts})

    } catch(error) {
        console.log(error)
    }   
}

async function  followUser(req,res) {

    
}

async function  getuserFavorites(req,res) {}

async function  likePost(req,res) {}




module.exports = { followUser, getUserPosts, getuserFavorites, likePost, getFollowedPosts}