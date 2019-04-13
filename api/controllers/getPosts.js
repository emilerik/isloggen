const handleGetPosts = db => (req, res) => {
  db.transaction(trx => {
    trx
      .where("posts")
      .select.insert({
        user_id: user_id,
        content: content
      })
      .into("posts")
      .returning("id")
      .then(postId => {
        return trx("users")
          .where("id", "=", user_id)
          .increment("postcount", 1)
          .then(() => {
            res.json(content);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(`unable to post ${err}`));
};

module.exports = {
  handleGetPosts
};
