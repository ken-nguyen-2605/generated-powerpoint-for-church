import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import songRoutes from "./routes/song.route.js";
import PptxGenJS from "pptxgenjs";
import axios from "axios";
import PowerpointFile from "./utils/class/powerpoint.js";
import * as MyPPTX from "./utils/class/aggregator.js";
import { defineVerseType } from "./utils/class/base-const/lyrics-manip.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/api/songs", songRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Download route
app.post("/api/download", async (req, res) => {
  // type: nhaple, dangle, hieple, ketle
  const data = req.body;
  // Nếu thiếu dữ liệu thì trả về lỗi
  // Add condition that checks if the data is empty
  // Or do not allow the user to submit the form if the data is empty in html
  const songsData = {
    nhaple: data["nhaple"],
    dangle: data["dangle"],
    hieple: data["hieple"],
    chame: data["chame"],
    ketle: data["ketle"],
  };
  const orderOfLyrics = [0, 1, 0, 2, 0];
  let arrayOfSongs = [];
  for (const key in songsData) {
    let song = await axios.get(
      `http://localhost:5000/api/songs?name=${songsData[key]}&part=${key}`
    );
    if (!song.data.data) {
      return res.status(400).json({ message: "Song not found" });
    }
    for (const verse of song.data.data.lyrics) {
      arrayOfSongs.push({
        type: defineVerseType(verse),
        verse: new MyPPTX.Verse(verse),
      });
    }
    const songVersesPatched = patchVerse(arrayOfSongs, orderOfLyrics);
    // An array of type verse to pass right in to Song class
    song = new MyPPTX.Song(songsData[key], key, songVersesPatched);
    songsData[key] = song;
    arrayOfSongs = [];
  }
  /*
  songsData is an object with keys nhaple, dangle, hieple, chame, ketle
  Each key has a value of Song object
  */
  const listOfSlides = [
    new MyPPTX.MoiCacEmQuy(),
    new MyPPTX.KinhDucChuaThanhThan(),
    MyPPTX.kinhTamMoiPhucThat,
    MyPPTX.kinhMuoiDieuRan,
    MyPPTX.kinhNamDieuRan,
    new MyPPTX.NavigationPage(),
    new MyPPTX.BaiDocVaTinMung("Gc 2, 14-18", "Mc 8, 27-35"),
    songsData.nhaple,
    new MyPPTX.KinhThuongXot(),
    new MyPPTX.KinhVinhDanh(),
    new MyPPTX.DapCaVaAlleluia(
      "ĐÁP CA",
      "Tôi sẽ bước đi trước Thiên Nhan của Chúa."
    ),
    new MyPPTX.DapCaVaAlleluia(
      "ALLELUIA - ALLELUIA",
      "Chúa phán: “Thầy là đường, là sự thật và là sự sống. Không ai đến được với Cha mà lại không qua Thầy”."
    ),
    new MyPPTX.TinMung("Mc 8, 27-35"),
    songsData.dangle,
    new MyPPTX.ThanhThanhThanh(),
    new MyPPTX.MauNhiemDucTin(),
    new MyPPTX.KinhTruocRuocLe(),
    songsData.hieple,
    songsData.chame,
    new MyPPTX.KinhSauRuocLe(),
    songsData.ketle,
    new MyPPTX.EucharisticYouthSong(),
  ];
  let powerpoint = new PowerpointFile(listOfSlides, "Red");
  powerpoint.write();
  // powerpoint.powerpoint.writeFile({ fileName: "Quyetdinh.pptx" });
  powerpoint.powerpoint.write("nodebuffer").then((buffer) => {
    console.log("Done");
    res.attachment("fileChieuMay.pptx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    );
    console.log("Done");
    res.send(buffer);
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});

function patchVerse(songVerses, orderOfVerses) {
  let patchedSongVerses = [];
  for (let i = 0; i < orderOfVerses.length; i++) {
    for (let j = 0; j < songVerses.length; j++) {
      if (songVerses[j].type === orderOfVerses[i]) {
        patchedSongVerses.push(songVerses[j].verse);
      }
    }
  }
  return patchedSongVerses;
}
