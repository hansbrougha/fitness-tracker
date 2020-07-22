const path = require("path");
const router = require("express").Router();

// router.get("/", (req, res) => {
//   // console.log("hit");
//   res.sendFile(path.join(__dirname + "../public/index.html"));
// });

router.get("/exercise", (req, res) => {
  console.log("hit");
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  // console.log(res);
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
