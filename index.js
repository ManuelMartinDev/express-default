const express = require("express");
const { config } = require("dotenv");

const { indexRouter } = require("./routes/main");

config();

const app = express();

app.set("PORT", 4000 | process.env.PORT);

app.use("/", indexRouter);

app.listen(app.get("PORT"), () => {
  console.log(`App running on port ${app.get("PORT")}`);
});
