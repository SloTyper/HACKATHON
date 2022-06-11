const express = require("express");
const router = express.Router();
const User = require("../models/user")
// routes start with /dashboard
router.get("/", async(req, res)=>{
    const user = await User.find({_id: req.user._id}).populate("borrowedList")
    console.log(req.user, "user: ", user)
    res.send(user);
})

module.exports = router;
// const user = await User.findOne({_id: req.user._id}).populate("borrowedList").populate("lendingbooklist").populate({path:'lendinghistory', match: { lender: req.user._id}});
