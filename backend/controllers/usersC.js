const userModel = require('../models/User')
const postModel = require('../models/Post');


async function getFollowedPosts (req,res) {
    try {
    let userID = req.user._id;
    // const posts = await userModel.findOne({_id: userID}).populate()
    const allposts = await postModel.find({}).populate("author").sort({'date': "-1"})

    // const posts = await postModel.find({}).populate("author")
    console.log("all posts form post model" + allposts)

    const followedPosts = allposts.filter( item => item._id === userID)
    console.log("followed post of the user" + followedPosts)

   

    followedPosts.length > 0 ? res.status(200).json({message: "Followed user posts retreived", allPosts: followedPosts}) : res.status(200).json({message: "no post availaible"})


    } catch(error) {
        console.log(error)
    }   

}

async function  getUserPosts (req,res) {

    try {

    const user = await userModel.findOne({userName: req.params.userName}).populate("posts").populate({
        path : "posts.author",
        }).sort({'posts.date': "-1"})

    console.log("this the users post to display " + user.posts)

    user.posts.length > 0 ? res.status(200).json({message: "user post for profile retreived", allPosts: user.posts}) : res.status(200).json({message: `no existing post for ${user.userName} yet`})

    } catch(error) {
        console.log(error)
    }   
}

//TODO
async function  followUser(req,res) {
    try {
        const userToFollow = await userModel.findOne({userName: req.params.userName})  //object with user to follow info, push its ID to 
        console.log(userToFollow)

        // const activeUser = await userModel.findOne({_id: req.user._id})
        // console.log(activeUser)
        const isUserFollowed = await userModel.findOne({_id : req.user._id, "userAction.followedUsers": userToFollow._id})

        console.log(isUserFollowed)
        // const isUserFollowed = activeUser.userAction.followedUsers.filter(elem => elem === userToFollow._id )
        // console.log(isUserFollowed)

        if(!isUserFollowed) {
            await userModel.updateOne({_id: req.user._id}, {  $push: {
                "userAction.followedUsers": userToFollow._id}})
            await userModel.updateOne({_id: userToFollow._id}, {  $push: {
                "userAction.followedBy": req.user._id}})
            console.log(req.params.userName + 'followed')
            return res.status(200).json({user: `${userToFollow.userName}`, message :  "followed"})
        }
            await userModel.updateOne({_id: req.user._id}, {  $pull: {
                "userAction.followedUsers": userToFollow._id}})
            await userModel.updateOne({_id: userToFollow._id}, {  $pull: {
                "userAction.followedBy": req.user._id}})
            console.log(req.params.userName + 'unfollowed')
            return res.status(200).json({user: `${userToFollow.userName}`, message :  "unfollowed"})

        } catch (err) {
            console.log(err)
            }

}

//TODO
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

//TODO
async function  likePost(req,res) {
    try {
        // console.log(req.user._id)
        const isLiked = await userModel.findOne({_id : req.user._id, "userAction.favPosts": req.params.id})

        if (!isLiked) {
            await userModel.updateOne({_id: req.user._id}, {  $push: { "userAction.favPosts": req.params.id}})
            await postModel.updateOne({_id: req.params.id}, {  $push: { like: req.user._id}})
           return res.status(200).json({message: "post liked"})

        }
        
            await userModel.updateOne({_id: req.user._id}, {  $pull: { "userAction.favPosts": req.params.id}}) 
            await postModel.updateOne({_id: req.params.id}, {  $pull: { like: req.user._id}})
            return res.status(200).json({message: "post unliked"})

        } catch (err) {
            console.log(err)
            }
}

async function searchUser(req,res) {
    try {
        const allUsers = await userModel.find({}) 
    
        allUsers.length > 0 ? res.status(200).json({message: "all users retreived", allPosts: allUsers}) : res.status(200).json({message: "no existing users yet"})
    
        } catch(error) {
            console.log(error)
        }   
}




module.exports = { followUser, getUserPosts, getuserFavorites, likePost, getFollowedPosts, searchUser}