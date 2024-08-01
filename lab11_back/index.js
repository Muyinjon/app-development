const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//use the body parser middleware
app.use(bodyParser.json());
//use express server to serve static files. any file in public folder will be served
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongodb

mongoose
  .connect("mongodb://localhost/userlogin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(`username: ${username} password: ${password}`);

  mongoose.connection.db
    .collection("users")
    .findOne({ username: username, password: password }, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      }
      if (result) {
        return res.status(200).send("Login successful");
      } else {
        return res.status(401).send("Invalid credentials");
      }
    });
});
app
  .get("/", (req, res) => {
    res.redirect(__dirname + "/public/index.html");
  })
  .listen(3000, function () {
    console.log("server is running on port 3000");
  });
