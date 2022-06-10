const mongoose = require("mongoose");
const  {Schema} = mongoose;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isbnNumber: {
        type: String,
        Required: true
    },
    about: {
        type: String,
    },
    genre: {
        type: [String]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user"
    },
    borrowed: {
        type: Boolean,
        default: false
    },
    numberOfTimesBorrowed: {
        type: Number
    }
})

module.exports = mongoose.model("Book", bookSchema);