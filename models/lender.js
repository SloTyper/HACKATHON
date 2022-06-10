const mongoose = require("mongoose");
const  {Schema} = mongoose;


const lenderSchema = new Schema({
    lenderUserID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user"
    },
    lendingbooklist: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: book}]
    },
    lendingHistory: [{
        type: Schema.Types.ObjectId,
        ref: "lendinghistory"
    }]
});

module.exports = mongoose.model("Lender", lenderSchema);
