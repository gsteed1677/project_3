const router = require("express").Router();
const postRoutes = require("./post");

router.route("/posts")
    .get(postRoutes.findAll)
    .post(postRoutes.create)

router.route("/posts/:id")
    //.get(postRoutes.findById)
    .put(postRoutes.update)
    .delete(postRoutes.remove);


module.exports = router;