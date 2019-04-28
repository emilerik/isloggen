const handleGetPosts = db => (req, res) => {
  db.select("kommentar", "betyg", "plats", "datum", "name")
    .from("posts")
    .innerJoin("users", "users.id", "posts.user_id")
    .then(posts => res.json(posts));
};

module.exports = {
  handleGetPosts
};
