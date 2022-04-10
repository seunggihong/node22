const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev")); // morgan middlewrare : request and response information show console >> function argument : dev, combined, common, short, tiny
app.use("/", express.static(path.join(__dirname, "public"))); // static middleware : router == static middelwrare

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // extended is false = interpret using quertstring moudule // extended is true = interpret using qs module

app.use(cookieParser(process.env.COOKIE_SECRET)); // make cookies object in interpret cookies
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.use((req, res, next) => {
  console.log("all request");
  next();
});
app.get(
  "/",
  (req, res, next) => {
    console.log("GET / request");
    next();
  },
  (req, res) => {
    throw new Error("error is gone middleware");
  }
);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "wating server");
});
