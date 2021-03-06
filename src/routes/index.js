const express = require("express");
const fs = require("fs");
const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const response = await fs.readFileSync("src/routes/data.json", "utf-8");
    const data = JSON.parse(response);

    res.render("index", { data, render: data[1] });
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
