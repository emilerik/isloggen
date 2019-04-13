const handlePost = db => (req, res) => {
  const { user_id, content } = req.body;
  if (!content) {
    return res.status(400).json("incorrect form submission");
  }
  console.log(content);
  db.transaction(trx => {
    trx
      .insert({
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
  handlePost
};
