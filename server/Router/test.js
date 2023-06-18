const express = require("express");
const router = express.Router();
const getLotteryNumbers = require("../lottery");

router.get("/", async (req, res) => {
  try {
    const lotteryNumbers = await getLotteryNumbers(req.query.drwNo);
    res.json(lotteryNumbers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch lottery numbers" });
  }
});

module.exports = router;
