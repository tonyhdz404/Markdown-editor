const express = require("express");
const app = express();

const expressLayouts = require("express-ejs-layouts");

//* Setting Views & View Engine
app.set("view engine", "ejs");
app.use(expressLayouts);

app.set("views", "./src/views");
app.set("layout", "layouts/layout.ejs");
app.use(express.static("./src/public"));

//* Routes
const indexRouter = require("./src/routes/index");

app.use("/", indexRouter);

app.listen(7000, () => {
  console.log("Server Running on Port: 7000 🟢");
});
