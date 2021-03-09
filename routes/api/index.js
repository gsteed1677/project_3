const router = require("express").Router();
const postRoutes = require("./post");

router.route("/posts")
    .get(postRoutes.findAll)
// .post(postRoutes.create)

router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);



module.exports = router;