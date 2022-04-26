const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary"); //import async boundary from errors

async function reviewExists(req, res, next) { //check if review with id exists
  const { reviewId } = req.params;
  const review = await service.read(reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  return next({
    status: 404,
    message: "Review cannot be found.",
  });
}

async function update(req, res) {
  const { reviewId } = req.params;
  const { content, score } = req.body.data;
  res.locals.review.content = content;
  res.locals.review.score = score;
  const review = await service.update(res.locals.review);
  const data = await service.readCriticReview(reviewId);
  res.json({ data: data[0] });
}

async function destroy(req, res) {
  await service.destroy(Number(res.locals.review.review_id));
  res.sendStatus(204);
}

module.exports = {
  update: [asyncErrorBoundary(reviewExists), update],
  delete: [asyncErrorBoundary(reviewExists), destroy],
  reviewExists,
};
