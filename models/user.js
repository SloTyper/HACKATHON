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
    lendingList: {
        type: Schema.Types.ObjectId,
        ref: "lendinglist"
    }
});

module.exports = mongoose.model("User", userSchema);