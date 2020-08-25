const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const index = require("./routers/index");
const users = require("./routers/users");
const config = require("./utils/config");
const errorHandler = require("./middleware/error");

app.set("view engine", "ejs");
app.use("/", express.static("public"), index);
app.use("/api/v1/users", express.static("public"), users);
app.use(errorHandler);
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection
  .once("open", () => {
    console.log("Database is up");
  })
  .on("error", () => {
    console.log("Error connecting to database");
  });
const PORT = process.env.PORT;
app.listen(PORT, console.log("Listening on " + process.env.PORT));
