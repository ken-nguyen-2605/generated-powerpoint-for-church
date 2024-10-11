import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import songRoutes from "./routes/song.route.js";
import PptxGenJS from "pptxgenjs";
import axios from "axios";
import PowerpointFile from "./utils/class/powerpoint.js";
import MyPPTX from "./utils/class/aggregator.js";
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
  const arrayOfSongs = [];
  for (const key in songsData) {
    const song = await axios.get(
      `http://localhost:5000/api/songs?name=${songsData[key]}&part=${key}`
    );
    arrayOfSongs.push(song.data.data);
  }
  console.log(arrayOfSongs);
  let pptx = new PptxGenJS();
  const listOfSlides = [
    new MyPPTX.NavigationPage(),
    
  ]
  pptx.write("nodebuffer").then((buffer) => {
    // Headers help the browser understand how to process the response
    res.attachment("fileChieuMay.pptx");
    // res.attachment is a helper function that sets the headers for you
    // res.setHeader("Content-Disposition", "attachment; filename=example.pptx");
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    );
    res.send(buffer);
  });
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
