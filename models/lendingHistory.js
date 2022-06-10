const mongoose = require("mongoose");
const user = require("./user");
const {Schema}= mongoose;

const lendingHistorySchema = new Schema({
    lender: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    borrower: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
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