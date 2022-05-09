const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


const postSchema = new mongoose.Schema({
    date:{type: Date, default: Date.now},

    author:{ type: mongoose.Schema.Types.ObjectId, ref: "User", default : [] },

    content:{
        image: {type: String}, //check how to define image
        text: {type: String}
         },
    
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default : [] }], //user to create a counter like.length

})

postSchema.plugin(uniqueValidator);


module.exports = new mongoose.model("Post", postSchema)