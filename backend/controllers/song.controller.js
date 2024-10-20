import Song from "../models/song.model.js";
import mongoose from "mongoose";

export const createSong = async (req, res) => {
  const song = req.body;
  
  if (!song.name || !song.part || !song.lyrics) {
    return res
      .status(400)
      .json({ success: false, message: "Please fill all fields" });
  }
  const newSong = new Song(song);
  try {
    await newSong.save();
    res.status(201).json({ success: true, data: newSong });
  } catch (error) {
    console.log("Error in post song: ", error.message);
    res.status(409).json({ success: false, message: "Server Error" });
  }
};

export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json({ success: true, data: songs });
    // console.log("Get all songs");
  } catch (error) {
    console.log("Error in get all songs: ", error.message);
    res.status(404).json({ success: false, message: "Server Error" });
  }
};

export const getSongByFilter = async (req, res) => {
  const { name, part } = req.query;
  if (name && part) {
    try {
      const songs = await Song.findOne({ name: name, part: part });
      res.status(200).json({ success: true, data: songs });
    } catch (error) {
      console.log("Error in get songs: ", error.message);
      res.status(404).json({ success: false, message: "Server Error" });
    }
  } else {
    res
      .status(404)
      .json({ success: false, message: "Please provide name and part" });
  }
};

export const getSongsById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id) {
    try {
      const songs = await Song.findById(id);
      res.status(200).json({ success: true, data: songs });
    } catch (error) {
      console.log("Error in get songs: ", error.message);
      res.status(404).json({ success: false, message: "Server Error" });
    }
  } else {
    try {
      const songs = await Song.find();
      res.status(200).json({ success: true, data: songs });
    } catch (error) {
      console.log("Error in get songs: ", error.message);
      res.status(404).json({ success: false, message: "Server Error" });
    }
  }
};


// Can update all fields or just one field of the song
export const updateSong = async (req, res) => {
  const id = req.params.id;
  const song = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }
  try {
    const updatedSong = await Song.findByIdAndUpdate(id, song, { new: true });
    res.status(200).json({ success: true, data: updatedSong });
    // { new: true } returns the updated song
    // without this option, it returns the old song before the update
  } catch (error) {
    console.log("Error in update song: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteSong = async (req, res) => {
  const id = req.params.id;

  try {
    await Song.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Song deleted" });
  } catch (error) {
    console.log("Error in delete song: ", error.message);
    res.status(404).json({ success: false, message: "Song not found" });
  }
};

export const deleteAllSongs = async (req, res) => {
  try {
    await Song.deleteMany({});
    res.status(200).json({ success: true, message: "All songs deleted" });
  } catch (error) {
    console.log("Error in delete all songs: ", error.message);
    res.status(404).json({ success: false, message: "Server Error" });
  }
};