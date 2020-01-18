const handlePost = db => (req, res) => {
  const { user_email, kommentar, betyg, plats, datum } = req.body;
  if (!kommentar) {
    return res.status(400).json("incorrect form submission");
  }
  db.transaction(trx => {
    trx
      .insert({
        user_email: user_email,
        kommentar: kommentar,
        betyg: betyg,
        plats: plats,
        datum: datum
      })
      .into("posts")
      .returning("id")
      .then(postId => {
        return trx("users")
          .where("email", "=", user_email)
          .increment("postcount", 1)
          .then(() => {
            res.json(`Successfully added post from user ${user_email}`);
          });
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch(err => res.status(400).json(`unable to post ${err}`));
};

module.exports = {
  handlePost
};
