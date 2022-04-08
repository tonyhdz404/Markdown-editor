const express = require("express");
const app = express();
const mongoose = require("mongoose");

const expressLayouts = require("express-ejs-layouts");

//* Connecting to MongoDB
mongoose
  .connect(
    "mongodb+srv://hernanto:UeEIXipkmDeTOZv7@cluster0.2bkgu.mongodb.net/markdownDB?retryWrites=true&w=majority"
  )
  .then(() => console.log("Mongoose Connected 🍏"))
  .catch((err) => console.error("ERROR 🍎"));

//* Setting Views & View Engine
app.set("view engine", "ejs");
app.use(expressLayouts);

app.set("views", "./src/views");
app.set("layout", "layouts/layout.ejs");
app.use(express.static("./src/public"));

//* Routes
const indexRouter = require("./src/routes/index");
const docRouter = require("./src/routes/documentRouter");

app.use("/", indexRouter);
app.use("/documents", docRouter);

app.listen(1337, () => {
  console.log("Server Running on Port: 1337 🟢");
});
