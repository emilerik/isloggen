const handleRegister = (db) => (req, res) => {
  const { id, name } = req.body;
  if (!name || !id) {
    console.log("incorrect form submission");
    console.log(name, id);
    return res.status(400).json("incorrect form submission");
  }
  db.transaction((trx) => {
    trx
      .insert({
        id,
        name,
      })
      .into("users")
      .returning("name")
      .then((name) => {
        res.json(name);
        console.log("successfully registered!");
        console.log(name);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  }).catch((err) => {
    res.status(400).json(`unable to register, ${err} `);
    console.log("unable to register");
    console.log(name);
  });
};

module.exports = {
  handleRegister,
};
