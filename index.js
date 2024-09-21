import { PowerpointFiles } from "./class.js";
import { powerpointName } from "./data.js";

let verse1 =
  "1. Một tấm bánh trắng chúng con hiệp dâng, nguyện nên sức thiêng dưỡng nuôi trần gian. Một ly rượu nho thắm hương thơm ngát, sự sống muôn đời chính Cha ban tặng.";
let verse2 =
  "2. Rộn vang giai khúc tán dương ngợi ca, kỳ công khắp nơi chính Cha làm ra. Ngài gieo khúc hát trong lòng con mãi, nguyện suốt cuộc đời hát khen Danh Ngài.";
let chorus =
  "ĐK. Đây tâm tình, lòng con thảo kính, xin tiến dâng Cha với cả tình yêu. Này bánh thơm, đây ly rượu nồng, nguyện Cha đoái thương đến trái tim hồng, rộng ban thánh ân bao la thỏa lòng, con ước mong.";
let orderOfLyrics = [verse1, chorus, verse2, chorus];

let myPowerpoint = new PowerpointFiles();
myPowerpoint.createTransitionSlide();
myPowerpoint.createSongSlides("GIAI KHÚC DÂNG TIẾN 4", "Dâng Lễ", orderOfLyrics, "Green");
myPowerpoint.saveFile(powerpointName);



// let pptx = new PptxGenJS();

// // pptx.defineLayout(layoutProps);
// // pptx.layout = layoutProps.name;


// let slide = pptx.addSlide({ masterName: "Green" });
// let blackSlide = pptx.addSlide({ masterName: "Black" });
// slide.addText(
//   [
//     {
//       text: preContent,
//       options: { color: "FFFF00", fontSize: 60 },
//     },
//     {
//       text: verse1,
//       options: { color: "FFFFFF", fontSize: 60 },
//     },
//   ],
//   lyricsProps
// );

// pptx.writeFile({ fileName: fileName });
