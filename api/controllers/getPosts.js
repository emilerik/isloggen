const handleGetPosts = db => (req, res) => {
  const { email } = req.params;
  db.select("kommentar", "betyg", "plats", "datum", "name")
    .from("posts")
    .where("user_email", email)
    .innerJoin("users", "users.email", "posts.user_id")
    .then(posts => res.json(posts));
};

module.exports = {
  handleGetPosts
};
