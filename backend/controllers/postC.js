const userModel = require('../models/User')
const postModel = require('../models/Post')


async function getAllPosts(req,res) {
    try {

    const allPost = await postModel.find({})
    allPost.length > 0 ? res.status(200).json({message: "Fetch successfull", allPost: allPost}) : res.status(200).json({message: "no post availaible"})
   
    } catch(error) {
        console.log(error)
    }    
}

async function createPost(req,res) {
    try {

    const post = await postModel.create({
        //TODO : add profile picture creation
        author: req.user._id,
        content: {
            // TO DO - HOW TO UPLOAD IMG 
            image: req.body.imageURL,
            text: req.body.description
         }        
    })
        console.log(post)
        return res.status(200).json({message: `new post create at ${post.date}`});
    
    } catch(error) {
        console.log(error)
    }    
}

async function deletePost(req,res) {
    const postID = req.params.postID
    

    const result = await postModel.deleteOne({_id: postID})

    if (result.deletedCount === 1) {
        // choose the good syntax
        // explore with $elemMatch:{$in:[postID]} instead of contains
        // try await userModel.updateMany({"userAction.favPosts": {$elemMatch: {$in: ["post3"]}  }}, { $pull: { "userAction.favPosts": "post3" }})
        // await userModel.updateMany({userAction: {favPosts: { $contains : postID }}}, { $pull: { userAction: {favPosts: postID }}})
        //remove post id to favPost of users
        await userModel.updateMany({"userAction.favPosts": {$elemMatch: {$in: [postID]}  }}, { $pull: { "userAction.favPosts": postID }})
        
        res.status(200).json({message: `Publication deleted`});
      } else {
        res.status(400).json({message: `This publication doesn't exist`});
      }
}


module.exports = {getAllPosts, createPost, deletePost}