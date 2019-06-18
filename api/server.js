const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

//Controllers
const register = require("./controllers/register.js");
const signin = require("./controllers/signin.js");
const post = require("./controllers/post.js");
const getPosts = require("./controllers/getPosts.js");
//const profile = require('./controllers/profile');
//const image = require('./controllers/image');

//Establishing database connection
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "isinfo-db"
  }
});

const app = express();

//Middleware
app.use(cors());
app.use(bodyParser.json());

//End-points
app.get("/", (req, res) => {
  res.send("this is a server");
});
app.get("/getposts/:id", getPosts.handleGetPosts(db));
app.post("/signin", signin.handleSignin(db, bcrypt));
app.post("/register", register.handleRegister(db, bcrypt));
app.post("/post", post.handlePost(db));
/*app.get("/profile/:id", profile.handleProfileGet(db));
app.put("/image", image.handleImage(db));
app.post("/imageurl", (req, res) => image.handleApiCall(req, res));
*/
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

/*
/ --> "this is working"
/signin --> POST = success/fail
/register --> POST = user
/post --> PUT


*/
