const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const knex = require("knex");
const { config } = require("./config.js");

//Controllers
const register = require("./controllers/register.js");
const signin = require("./controllers/signin.js");
const post = require("./controllers/post.js");
const getPosts = require("./controllers/getPosts.js");
//const profile = require('./controllers/profile');
//const image = require('./controllers/image');

// process.on("unhandledRejection", (reason) => {
//   console.error(reason);
// });

//Establishing database connection
const db = knex({
  client: "pg",
  connection: {
    connectionString: config.dburl,
    ssl: config.dbssl,
  },
});
const app = express();

// Set up Auth0 configuration
/*const authConfig = {
  domain: "isinfo.eu.auth0.com",
  audience: "YOUR_API_IDENTIFIER"
};*/

//Middleware
app.use(cors());
app.use(bodyParser.json());
// Define middleware that validates incoming bearer tokens
// using JWKS from isinfo.eu.auth0.com
/*const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});*/

//End-points
app.get("/", (req, res) => {
  res.send("this is a server");
});
app.get("/getposts/:email", getPosts.handleGetPosts(db));
app.get("/getposts/", getPosts.handleGetPosts(db));
app.post("/signin", signin.handleSignin(db));
app.post("/register", register.handleRegister(db));
app.post("/post", post.handlePost(db));
/*app.get("/profile/:id", profile.handleProfileGet(db));
app.put("/image", image.handleImage(db));
app.post("/imageurl", (req, res) => image.handleApiCall(req, res));
*/

// Define an endpoint that must be called with an access token
/*app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});*/

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
/*
/ --> "this is working"
/signin --> POST = success/fail
/register --> POST = user
/post --> PUT


*/
