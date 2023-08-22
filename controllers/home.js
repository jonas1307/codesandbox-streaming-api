const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.json({
    Integrantes: [
      { Nome: "Jonas Lima de Amorim" },
      { Nome: "Samara" },
      { Nome: "Leon" },
      { Nome: "Junia" },
    ],
  });
});

module.exports = router;
