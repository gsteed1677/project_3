const router = require("express").Router();
const postRoutes = require("./post");

router.route("/posts")
    .get(postRoutes.findAll)
// .post(postRoutes.create)


module.exports = router;