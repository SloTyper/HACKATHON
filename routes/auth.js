const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/user")

router.get("/get", (req, res)=> {
  console.log("LLLLL")
  res.send("sup nigga")
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user)
        res.send({ loggedIn: false, message: "Invalid Username/Password" });
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({
            message: "successfully Authenticated",
            user,
            loggedIn: true,
          });
        });
      }
    })(req, res, next);
  });

  router.get("/getuser", async (req, res) => {
    if (req.user) {
      const user = await User.findOne(req.user)
      res.send({ isLoggedIn: true, user });
    } else {
      res.send({ isLoggedIn: false });
    }
  });

  router.get("/logout", (req, res) => {
    req.logout();
    if (!req.user) res.send({ isLoggedOut: true });
    else res.send({ isLoggedOut: false });
  });

  router.post("/register",async (req, res) => {
    console.log("LLLLLLLLLL");
    console.log("req.body", req.body.username);
    res.send(req.body);
    const users = await User.find({});
    console.log(users);
    // User.findOne({ username: req.body.username }, async (err, doc) => {
    //   if (err){
    //     console.log("!!!!", err);
    //     // throw err;
    //     res.statu
    //   }
    //   if (doc) res.send("User Already Exists");
    //   if (!doc) {
    //     const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //     const newUser = new User({
    //       username: req.body.username,
    //       password: hashedPassword,
    //     });
    //     await newUser.save();
    //     req.logIn(newUser, (err) => {
    //       if (err) throw err;
    //       return res.send({ created: true, newUser });
    //     });
    //   }
    // });
  });

module.exports = router;
