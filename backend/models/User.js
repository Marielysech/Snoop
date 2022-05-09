const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    name:{type: String, message : "Please enter you name"},

    email: {type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},

    password:{ type: String, required: true, minlength: 6},

    picture:{type: String},

    userAction: {
        followedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default : [] }],
        followedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default : [] }],
        favPosts: [ { type: mongoose.Schema.Types.ObjectId, ref: "Post", default : []}]
    },

    posts: [ { type: mongoose.Schema.Types.ObjectId, ref: "Post", default : []}]
    
})

userSchema.plugin(uniqueValidator);


module.exports = new mongoose.model("User", userSchema)