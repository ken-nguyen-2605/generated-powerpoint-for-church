import Song from "./../models/song.model.js";

export const dropNameIndex = async () => {
  try {
    await Song.collection.dropIndex("name_1");
    console.log("Unique index on 'name' dropped successfully.");
  } catch (error) {
    if (error.codeName === 'IndexNotFound') {
      console.log("Index 'name_1' does not exist.");
    } else {
      console.error("Error dropping index:", error);
    }
  }
};