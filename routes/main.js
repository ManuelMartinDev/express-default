const Router = require("express").Router;
const { defaultRouter } = require("./default/default");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("You are on the main app route");
});

indexRouter.use("/default", defaultRouter);

module.exports = {
  indexRouter,
};
