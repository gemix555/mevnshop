const router = require("express-promise-router")();

//const {checkJWTSign} = require('../middlewares/jwtCheck.middleware')
const { category: categories } = require("../controllers");

router.route("/:id").get(categories.get);
router.route("/").post(categories.create);
router.route("/").get(categories.getAll);
router.route("/:id").put(categories.update);
router.route("/:id").delete(categories.delete);

module.exports = router;
