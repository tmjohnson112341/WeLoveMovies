const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary"); //import async boundaries from errors

async function list(req, res) {
  res.json({ data: await service.list() });
}

module.exports = {
  list: asyncErrorBoundary(list)
};