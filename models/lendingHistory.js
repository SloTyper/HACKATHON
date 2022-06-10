const mongoose = require("mongoose");
const user = require("./user");
const {Schema}= mongoose;

const lendingHistorySchema = new Schema({
    lender: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: "book"
    },
    borrower: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    dateOfBorrowing: String,
    dateOfReturn: String,
    modeOfDelivery: {
        type: String,
    },
    borrowedPeriod:{
        type: Number,
        required: true
    },
    pricePaid: {
        type: Number,
        required: true
    },
    rateOfbowwrowing: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("LendingHistory", lendingHistorySchema)
