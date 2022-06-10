require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const User = require("./models/user");

const app = express();
let dbUrl = "mongodb://localhost:27017/test"
if(process.env.NODE_ENV === "production")
  dbUrl = process.env.DB_URL;

const secret = process.env.SECRET;

mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("database Connected");
  }
);

const auth = require("./routes/auth");
const dashboard = require("./routes/dashboard");
const lenderRoutes = require("./routes/lenderRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use(cookieParser(secret));
// app.set("trust proxy", 1);

app.use(
  session({
    name: "Session1.0",
    secret,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: dbUrl,
      secret,
      touchAfter: 24 * 60 * 60,
    }),
    cookie: {
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 100 * 60 * 60 * 24 * 7,
      domain: "/",
      sameSite: "none",
      secure: true,
    },
  })
);



app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

app.use("/", auth);
app.use("/dashboard", dashboard);
app.use("/lender", lenderRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening at port: ${port}`));
