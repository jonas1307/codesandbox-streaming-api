const express = require("express");
const Song = require("../models/song");
const router = express.Router();

const song1 = new Song(
  1,
  "Your Song",
  "Elton John",
  `${process.env.BASE_PATH}/files/your_song.mp3`
);
const song2 = new Song(
  2,
  "Running up that hill",
  "Kate Bush",
  `${process.env.BASE_PATH}/music/running_up.mp3`
);
const song3 = new Song(
  3,
  "Only Time",
  "Enya",
  `${process.env.BASE_PATH}/music/only_time.mp3`
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
