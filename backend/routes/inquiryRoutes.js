const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

router.post("/inquiry", async (req, res) => {
  const inquiry = await Inquiry.create(req.body);
  res.json(inquiry);
});

module.exports = router;