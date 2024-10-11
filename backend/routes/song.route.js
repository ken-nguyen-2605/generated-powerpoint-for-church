import express from "express";
import { createSong, deleteSong, getSongByFilter, getSongsById, updateSong, getAllSongs } from "../controllers/song.controller.js";
const router = express.Router();
// http://localhost:5000/api/songs
router.get("/", getSongByFilter);
router.get("/:id", getSongsById);
router.get("/all", getAllSongs);
router.post("/", createSong);
router.delete("/:id", deleteSong);
router.put("/:id", updateSong);

export default router;
