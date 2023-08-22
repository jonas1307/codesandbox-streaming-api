const express = require("express");
const songs = require("../controllers/songs");
const home = require("../controllers/home");

module.exports = function (app) {
  app.use(express.json());
  app.use("/", home);
  app.use("/songs", songs);
};
