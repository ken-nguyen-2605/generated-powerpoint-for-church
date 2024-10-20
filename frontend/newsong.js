import axios from "https://cdn.skypack.dev/axios";

const fetchAllSong = async () => {
	try {
		return await axios.get("http://localhost:5000/api/songs/all");
	} catch (error) {
		console.log("There was a problem with the Axios operation:", error);
	}
};

document
	.getElementById("new-song-form")
	.addEventListener("submit", async function (event) {
		event.preventDefault();

		const songName = document.getElementById("song-name").value.trim();
		const songPart = document.getElementById("song-part").value.trim();
		const songLyrics = document
			.getElementById("song-lyrics")
			.value.trim()
			.split("\n")
			.filter((line) => line !== "");

		const song = {
			name: songName.toUpperCase(),
			part: songPart,
			lyrics: songLyrics,
		};

		const allSongs = await fetchAllSong();
		const allSongNamesAndParts = allSongs.data.data.map((song) => ([song.name, song.part]));
		// Check if is there any song with the same name and part
		if (allSongNamesAndParts.some(([name, part]) => name === song.name && part === song.part)) {
			alert("Song already exists");
			return;
		}

		try {
			await axios.post("http://localhost:5000/api/songs/new", song);
			alert("Song created successfully");
		} catch (error) {
			console.log("There was a problem with the Axios operation:", error);
			alert("Failed to create song");
		}

		// Reset the form after submission
		this.reset();
	});
