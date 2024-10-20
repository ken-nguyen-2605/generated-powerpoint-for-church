import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { dropNameIndex } from "./utils/dropIndex.js";
import songRoutes from "./routes/song.route.js";
import axios from "axios";
import PowerpointFile from "./utils/class/powerpoint.js";
import * as MyPPTX from "./utils/class/aggregator.js";
import { defineVerseType, definePartType, patchVerse } from "./utils/class/base-const/lyrics-manip.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);
app.use("/api/songs", songRoutes);

// Base route
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
    song = new MyPPTX.Song(songsData[key], definePartType(key), songVersesPatched);
    songsData[key] = song;
    arrayOfSongs = [];
  }
  /*
  songsData is an object with keys nhaple, dangle, hieple, chame, ketle
  Each key has a value of Song object
  */
  const listOfSlides = [
    new MyPPTX.Transition(),
    new MyPPTX.MoiCacEmQuy(),
    new MyPPTX.KinhDucChuaThanhThan(),
    MyPPTX.kinhMuoiDieuRan,
    MyPPTX.kinhNamDieuRan,
    MyPPTX.kinhTamMoiPhucThat,
    new MyPPTX.NavigationPage(),
    new MyPPTX.BaiDocVaTinMung(data["baidoc2"], data["tinmung"]),
    new MyPPTX.Transition(),
    songsData.nhaple,
    new MyPPTX.Transition(),
    new MyPPTX.KinhThuongXot(),
    new MyPPTX.KinhVinhDanh(),
    new MyPPTX.Transition(),
    new MyPPTX.DapCaVaAlleluia("ĐÁP CA", data["dapca"]),
    new MyPPTX.Transition(),
    new MyPPTX.DapCaVaAlleluia("ALLELUIA - ALLELUIA", data["alleluia"]),
    new MyPPTX.TinMung(data["tinmung"]),
    new MyPPTX.Transition(),
    songsData.dangle,
    new MyPPTX.Transition(),
    new MyPPTX.ThanhThanhThanh(),
    new MyPPTX.Transition(),
    new MyPPTX.MauNhiemDucTin(),
    new MyPPTX.Transition(),
    new MyPPTX.LayChienThienChua(),
    new MyPPTX.Transition(),
    new MyPPTX.KinhTruocRuocLe(),
    songsData.hieple,
    new MyPPTX.Transition(),
    songsData.chame,
    new MyPPTX.KinhSauRuocLe(),
    new MyPPTX.Transition(),
    songsData.ketle,
    new MyPPTX.Transition(),
    new MyPPTX.EucharisticYouthSong(),
    new MyPPTX.Transition(),
  ];
  let powerpoint = new PowerpointFile(listOfSlides, data["theme"]);
  powerpoint.write();
  // powerpoint.powerpoint.writeFile({ fileName: "Quyetdinh.pptx" });
  powerpoint.powerpoint.write("nodebuffer").then((buffer) => {
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
  // dropNameIndex();
  console.log(`Server is running on port ${PORT}`);
});

