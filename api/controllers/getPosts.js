const handleGetPosts = db => (req, res) => {
  db.select("kommentar", "betyg", "plats", "datum")
    .from("posts")
    .then(posts => res.json(posts));
};

module.exports = {
  handleGetPosts
};
