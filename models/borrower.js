const mongoose = require("mongoose");
const {Schema} = mongoose;

const BorrowerSchema = {
    borrower: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

}