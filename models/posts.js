const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    contactNumber: {
        type: Number,
        trim: true
    },
    contactEmail: {
        type: String,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }


})

const Post = mongoose.model("Post", postSchema);
module.exports = Post