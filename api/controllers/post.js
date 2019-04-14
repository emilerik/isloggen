const handlePost = db => (req, res) => {
  const { user_id, kommentar, betyg, plats, datum } = req.body;
  if (!kommentar) {
    return res.status(400).json("incorrect form submission");
  }
  db.transaction(trx => {
    trx
      .insert({
        user_id: user_id,
        kommentar: kommentar,
        betyg: betyg,
        plats: plats,
        datum: datum
      })
      .into("posts")
      .returning("id")
      .then(postId => {
        return trx("users")
          .where("id", "=", user_id)
          .increment("postcount", 1)
          .then(() => {
            res.json(`Successfully added post from user ${user_id}`);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(`unable to post ${err}`));
};

module.exports = {
  handlePost
};
