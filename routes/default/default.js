const Router = require("express").Router;

const defaultRouter = Router();

defaultRouter.get("/", (req, res) => {
  res.send("You are on the main default route");
});

module.exports = {
  defaultRouter,
};
