import express from "express";
import {
	createSong,
	deleteSong,
	getSongByFilter,
	getSongsById,
	updateSong,
	getAllSongs,
	deleteAllSongs,
} from "../controllers/song.controller.js";
// http://localhost:5000/api/songs
const router = express.Router();
// /all should be plced before /:id to avoid conflict
// because when id is passed, /all route will skip and go to /:id
// otherwise, /all will be treated as id and cannot get to /all route
router.get("/", getSongByFilter);
router.get("/all", getAllSongs);
router.get("/:id", getSongsById);
router.post("/new", createSong);
router.delete("/all", deleteAllSongs);
router.delete("/:id", deleteSong);
router.put("/:id", updateSong);

export default router;
