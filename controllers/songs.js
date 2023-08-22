const express = require("express");
const Song = require("../models/song");
const router = express.Router();

const song1 = new Song(
  1,
  "XPTO",
  "XPTO",
  `${node.env.BASE_PATH}/music/song.mp3`
);
const song2 = new Song(
  2,
  "XPTO",
  "XPTO",
  `${node.env.BASE_PATH}/music/song.mp3`
);
const song3 = new Song(
  3,
  "XPTO",
  "XPTO",
  `${process.env.BASE_PATH}/music/song.mp3`
);

const songs = [song1, song2, song3];

router.get("/", async (req, res) => {
  res.json(songs);
});

router.get("/:id", async (req, res) => {
  const song = songs.filter((x) => x.id == req.params.id);
  if (!song || song.length === 0) {
    return res.status(404).send("The song with the given ID was not found.");
  }
  res.status(200).json(song);
});

module.exports = router;
