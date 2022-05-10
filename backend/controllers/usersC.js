const userModel = require('../models/User')
const postModel = require('../models/Post')


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
    try {
        const userToFollow = await userModel.findOne({userName: req.params.userName})  //object with user to follow info, push its ID to 
        console.log(userToFollow)

        const activeUser = await userModel.findOne({_id: req.user._id})
        console.log(activeUser)

        const isUserFollowed = activeUser.userAction.followedUsers.filter(elem => elem === userToFollow._id )
        console.log(isUserFollowed)

        if(isUserFollowed.length < 1) {
            await userModel.updateOne({_id: req.user._id}, {  $push: {
                "userAction.followedUsers": userToFollow._id}})
            console.log(req.params.userName + 'unfollowed')
            return res.status(200).json({message : `${userToFollow.userName} followed`})
        }
            await userModel.updateOne({_id: req.user._id}, {  $pull: {
                "userAction.followedUsers": userToFollow._id}})
            console.log(req.params.userName + 'unfollowed')
            return res.status(200).json({message : `${userToFollow.userName} unfollowed`})

        } catch (err) {
            console.log(err)
            }

}


async function  getuserFavorites(req,res) {
    try {
        let userID = req.user._id;
        const userData = await userModel.find({_id: userID}).populate({
            path : "userAction.favPosts",
            })
    
        console.log(favPosts)
    
        res.status(200).json({favPosts: userData.userAction.favPosts})
    
        } catch(error) {
            console.log(error)
        }   
}

async function  likePost(req,res) {
    try {
    
        const userData = await userModel.find({_id : req.user._id})

        const isLiked = userData.userAction.favPosts.filter(elem => elem === req.params.id)

        if (isLiked.length < 1) {
            await userModel.updateOne({_id: req.user._id}, {  $push: { "userAction.favPosts": req.params.id}})
            await postModel.updateOne({_id: req.params.id}, {  $push: { like: req.user._id}})
            res.status(200).json({message: "post liked"})

        }
        
            await userModel.updateOne({_id: req.user._id}, {  $pull: { "userAction.favPosts": req.params.id}}) 
            await postModel.updateOne({_id: req.params.id}, {  $pull: { like: req.user._id}})
            res.status(200).json({message: "post unliked"})

        } catch (err) {
            console.log(err)
            }
}




module.exports = { followUser, getUserPosts, getuserFavorites, likePost, getFollowedPosts}