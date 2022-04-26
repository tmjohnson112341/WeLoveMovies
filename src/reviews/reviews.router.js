const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed"); //import from errors

router.route("/:reviewId").put(controller.update).delete(controller.delete).all(methodNotAllowed); // create route for reviews
module.exports = router;