const mongoose = require('mongoose');
const { Schema } = mongoose

const postSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    likes: {type: Number,required:false},
    description: {type: String, required: true},
    PostImage: {type: String, required: true},
    date: {type: String, required:false},
    // user: {type: Schema.Types.ObjectId , ref:'User' }
})

const Post = mongoose.model('Post',postSchema)

module.exports = Post;