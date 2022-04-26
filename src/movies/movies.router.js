const router = require("express").Router({ mergeParams: true });
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed"); //import from errors

router.route("/").get(controller.list).all(methodNotAllowed);

router.route("/:movieId").get(controller.read).all(methodNotAllowed);

router
  .route("/:movieId/theaters").get(controller.readTheaters).all(methodNotAllowed); //route for the theaters where movie is playing

router
  .route("/:movieId/reviews").get(controller.readReviews).all(methodNotAllowed); //route for all reviews including critic 

module.exports = router;