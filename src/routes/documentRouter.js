const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await fs.readFileSync("src/routes/data.json", "utf-8");
    const data = JSON.parse(response);
    const render = data.find((doc) => +doc.id === +id);

    res.render("index", { data, render });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
