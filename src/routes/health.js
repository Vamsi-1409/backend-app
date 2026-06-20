const express = require("express");

const router = express.Router();

router.get("/health", async (req, res) => {

  res.status(200).json({
    status: "UP",
    service: "backend",
    timestamp: new Date()
  });

});

module.exports = router;