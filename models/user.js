const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    numberofBorrowedBooks: Number,
    borrowedList:{
        type: [{
            type: Schema.Types.ObjectId,
            ref: "book"
        }]
    },
    lendingbooklist: {
        type: [{
          type: mongoose.Schema.Types.ObjectId,
           ref: "book"
         }]
    },
    lendingHistory: [{
        type: Schema.Types.ObjectId,
        ref: "lendinghistory"
    }]
});

module.exports = mongoose.model("User", userSchema);
