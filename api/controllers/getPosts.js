const ManagementClient = require("auth0").ManagementClient;

const auth0 = new ManagementClient({
  domain: "isinfo.eu.auth0.com",
  clientId: "BGfRq8yDzG0PBhEMOoxemIW9gTOur5Mf",
  clientSecret:
    "pfokGyqsrDziT9cF6T3Nlu1FVygbv3eUSSQXE8V0ATyaXjwjOokPuKjPNMeqVXXz", // TODO: move somewhere
  scope: "read:users",
});

const handleGetPosts = (db) => async (req, res) => {
  const { email } = req.params;
  // console.log(email);
  if (email) {
    db.select(
      "comment",
      "rating",
      "location_id",
      "created_at",
      "observation_timestamp",
      "name"
    )
      .from("posts")
      .innerJoin("users", "users.id", "posts.user_id")
      .orderBy("observation_timestamp", "DESC")
      .then((posts) => res.json(posts));
  } else {
    const posts = await db
      .select(
        "comment",
        "rating",
        "location_id",
        "created_at",
        "observation_timestamp",
        "posts.id",
        "users.name"
      )
      .from("posts")
      .innerJoin("users", "users.id", "posts.user_id")
      .orderBy("observation_timestamp", "DESC");

    res.json(posts);
  }
};

module.exports = {
  handleGetPosts,
  auth0,
};
