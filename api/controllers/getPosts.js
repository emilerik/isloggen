const handleGetPosts = db => (req, res) => {
  const { id } = req.params;
  db.select("kommentar", "betyg", "plats", "datum", "name")
    .from("posts")
    .where("user_id", id)
    .innerJoin("users", "users.id", "posts.user_id")
    .then(posts => res.json(posts));
};

module.exports = {
  handleGetPosts
};
