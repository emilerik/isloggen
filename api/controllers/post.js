const { v4: uuidv4 } = require("uuid");
const { auth0 } = require("./getPosts");

const handlePost = (db) => (req, res) => {
  const { user_id, comment, rating, location_id } = req.body;
  if (!comment) {
    return res.status(400).json("incorrect form submission");
  }
  db.transaction((trx) => {
    trx
      .insert({
        id: uuidv4(),
        user_id,
        comment,
        rating,
        location_id,
        created_at: new Date(),
        observation_timestamp: new Date(),
      })
      .into("posts")
      .returning("*") // TODO return whole post instead of just id
      .then(async (post) => {
        post = post[0];
        const user = await auth0.getUser({ id: post.user_id });
        post["name"] = user.name;
        res.json(post);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => res.status(400).json(`unable to post ${err}`));
};

module.exports = {
  handlePost,
};
