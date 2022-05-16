const mongoose = require('mongoose');
const moment = require('moment');
var uniqueValidator = require('mongoose-unique-validator');


const postSchema = new mongoose.Schema({
    date:{type: String, default: moment().calendar()},

    author:{ type: mongoose.Schema.Types.ObjectId, ref: "User", default : {} },

    content:{
        image: {type: String, required: true}, //check how to define image
        text: {type: String}
         },
    
    like: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default : [] }], //user to create a counter like.length

})

postSchema.plugin(uniqueValidator);


module.exports = new mongoose.model("UsersPost", postSchema)