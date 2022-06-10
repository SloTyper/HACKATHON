const express = require("express");
const router = express.Router();
const Book = require("../models/book");


// routes starts with /lender
router.post("/addbook", async(req, res)=>{
    const book = new Book(req.body);
    await book.save();
    const user = new user.findOne(req.user.username);
    user.lendingbooklist.push(book);
    await user.save();
    console.log("lalala", user)
});

module.exports = router;
