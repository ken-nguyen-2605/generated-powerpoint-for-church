import axios from "https://cdn.skypack.dev/axios";

const fetchAllSongName = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/songs/all");
        return response.data.data.map((song) => song.name);
    } catch (error) {
        console.log("There was a problem with the Axios operation:", error);
    }
}

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

        const allSongNames = await fetchAllSongName();
        if (allSongNames.includes(song.name)) {
            alert("Song already exists");
            return;
        }

		// TODO: Add your database submission logic here

		try {
            await axios.post("http://localhost:5000/api/songs/new", song);
            alert("Song created successfully");
        } catch (error) {
            console.log("There was a problem with the Axios operation:", error);
            alert("Failed to create song");
        }

		// Optionally, reset the form after submission
		this.reset();
	});
