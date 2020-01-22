const handleGetPosts = db => (req, res) => {
    const {email} = req.params;
    if (email) {
        db.select("kommentar", "betyg", "plats", "datum", "name")
            .from("posts")
            .where("user_email", email)
            .innerJoin("users", "users.email", "posts.user_email")
            .orderBy("datum","DESC")
            .then(posts => res.json(posts));
    } else {
        db.select("kommentar", "betyg", "plats", "datum", "name")
            .from("posts")
            .innerJoin("users", "users.email", "posts.user_email")
            .orderBy("datum","DESC")
            .then(posts => res.json(posts));
    }
};

module.exports = {
    handleGetPosts
};
