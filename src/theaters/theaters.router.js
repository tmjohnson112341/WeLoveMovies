const router = require("express").Router();
const controller = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed"); //import from errors

router.route("/").get(controller.list).all(methodNotAllowed); //create theaters route 

module.exports = router;