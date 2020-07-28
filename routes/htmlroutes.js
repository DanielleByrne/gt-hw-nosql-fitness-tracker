const express = require("express");
const fs = require("fs");
const router = express.Router();

//routes to get to each html file
router.get("/", (req, res) => {
  res.send("public/index.html");
});

router.get("/stats", (req, res) => {
  fs.readFile("public/stats.html", "utf8", (err, response) => {
    if (err) throw err;
    else res.send(response);
  });
});

router.get("/exercise", (req, res) => {
  fs.readFile("public/exercise.html", "utf8", (err, response) => {
    if (err) throw err;
    else res.send(response);
  });
});

module.exports = router;
