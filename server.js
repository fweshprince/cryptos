const express = require("express");
const app = express();
require("dotenv").config();
const index = require("./routers/index");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", index);

const PORT = process.env.PORT;
app.listen(PORT, console.log("Listening on " + process.env.PORT));
