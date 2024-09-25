import {
  powerpointName,
  layoutProps,
  lyricsProps,
  titleProps,
  greenTheme,
  logoXuDoanProps,
  namMucVuProps,
  sectionOfTitleProps,
  characterPerSlideLimit,
  redTheme,
  purpleTheme,
} from "./data.js";

import {
  extractPreLyrics,
  extractLyrics,
  calculateFontSize,
} from "./lyrics-manip.js";
import PptxGenJS from "pptxgenjs";

class PowerpointFile {
  // Put in specific object of section, ex: Song, Transition
  constructor(arrSections = [], themeColor) {
    this.arrSection = arrSections;
    this.powerpoint = new PptxGenJS();
    this.themeColor = themeColor;
    this.setup();
  }
  setup() {
    // Layout size setup
    this.powerpoint.defineLayout(layoutProps);
    this.powerpoint.layout = layoutProps.name;

    // Background setup
    this.powerpoint.defineSlideMaster({
      title: "Green",
      background: { path: greenTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Red",
      background: { path: redTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Purple",
      background: { path: purpleTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Black",
      background: { color: "000000" },
    });
  }

  write() {
    for (let i = 0; i < this.arrSection.length; i++) {
      this.arrSection[i].create(this.powerpoint, this.themeColor);
    }
  }

  saveFile(powerpointName) {
    this.powerpoint.writeFile({ fileName: powerpointName });
  }
}

class EucharisticYouthSong {
  constructor() {
    this.pages = [
      "Thiếu nhi Việt Nam đứng lên trong giai đoạn mới. Theo tiếng Giáo Hội và tiếng quê hương kêu mời.",
      "Được trang bị dũng mạnh bằng tinh thần mới. Tuổi trẻ Việt Nam hăng hái xây thế hệ ngày mai.",
      "Cùng đi hỡi các thiếu nhi. Cùng đi với Chúa Kitô, nguồn sống Thánh Thể chan hòa, là lý tưởng của người thiếu nhi hôm nay.",
      "Thiếu nhi Việt Nam quyết tâm trong giai đoạn mới. Thánh hóa môi trường rèn những khả năng phi thường.",
      "Bằng nguyện cầu hi sinh và một bầu khí mới. Tuổi trẻ Việt Nam đem Chúa cho giới trẻ mọi nơi.",
    ];
    this.title = "THIẾU NHI\nTÂN HÀNH CA";
  }
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(this.title, titleProps);
    newSlide.addText(this.songPart, sectionOfTitleProps);
    newSlide.addImage(logoXuDoanProps);
    newSlide.addImage(namMucVuProps);

    for (let i = 0; i < this.pages.length; i++) {
      let newSlide = powerpoint.addSlide({ masterName: color });
      let copyLyricsProps = lyricsProps;
      copyLyricsProps.fontSize = 66;
      newSlide.addText(this.pages[i], copyLyricsProps);
    }
  }
}

// Transition slide
class Transition {
  constructor() {
    this.color = "Black";
  }
  create(powerpoint, color) {
    powerpoint.addSlide({ masterName: this.color });
  }
}

// Song slide
class Song {
  // let verse1 = new Lyric("1. Một tấm bánh trắng chúng con hiệp dâng, nguyện nên sức thiêng dưỡng nuôi trần gian. Một ly rượu nho thắm hương thơm ngát, sự sống muôn đời chính Cha ban tặng.");
  // (title, songPart, [verse1, chorus, verse2, chorus])
  constructor(title, songPart, arrVerse = []) {
    // arrVerse : array of Lyric Object
    this.title = title;
    this.songPart = songPart;
    this.arrVerse = arrVerse;
  }

  create(powerpoint, color) {
    this.createTitle(powerpoint, color);
    // Create slides for each verse
    for (let i = 0; i < this.arrVerse.length; i++) {
      // Create different slides for each page of verse
      for (let j = 0; j < this.arrVerse[i].lyricPerPage.length; j++) {
        switch (this.arrVerse[i].lyricPerPage[j].level) {
          case 0:
            this.createFirstOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].lyricPerPage[j].text
            );
            break;
          case 1:
            this.createSecondOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].lyricPerPage[j].text
            );
            break;
          default:
            console.log("Error: Level of lyric is not defined");
        }
      }
    }
  }

  createTitle(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(this.title, titleProps);
    newSlide.addText(this.songPart, sectionOfTitleProps);
    newSlide.addImage(logoXuDoanProps);
    newSlide.addImage(namMucVuProps);
  }

  createFirstOrderLyric(powerpoint, color, text) {
    // console.log(text);
    let preLyrics = extractPreLyrics(text);
    let lyrics = extractLyrics(text);

    let newSlide = powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(text); //////////////////////////
    newSlide.addText(
      [
        {
          text: preLyrics,
          options: { color: "FFFF00", fontSize: fontSize },
        },
        {
          text: lyrics,
          options: { color: "FFFFFF", fontSize: fontSize },
        },
      ],
      lyricsProps
    );
  }
  createSecondOrderLyric(powerpoint, color, text) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(text); //////////////////////////
    let tempProps = lyricsProps;
    tempProps.fontSize = fontSize;
    tempProps.color = "FFFFFF";
    newSlide.addText(text, tempProps);
  }
}

// Input of song slides
class Lyric {
  constructor(lyric) {
    this.lyricPerPage = [];
    this.distributeToPages(lyric);
  }

  // Distribute single lyric into pages
  distributeToPages(lyric) {
    // Split the lyric into sentences
    let sentences = extractLyrics(lyric).split(/(?<=\.)/);
    sentences[0] = extractPreLyrics(lyric) + sentences[0];

    // Distribute the sentences into pages
    let page = "";
    let characterCount = 0;
    for (let i = 0; i < sentences.length; i++) {
      if (characterCount + sentences[i].length < characterPerSlideLimit) {
        page += sentences[i];
        characterCount += sentences[i].length;
      } else {
        this.lyricPerPage.push({
          text: page,
          level: 1,
        });
        page = sentences[i];
        characterCount = sentences[i].length;
      }
    }
    this.lyricPerPage.push({
      text: page,
      level: 1,
    });
    this.lyricPerPage[0].level = 0;
    // Remove first space character
    // Alternative: remove all level 1 pages
    for (let i = 0; i < this.lyricPerPage.length; i++) {
      if (this.lyricPerPage[i].text[0] === " ") {
        this.lyricPerPage[i].text = this.lyricPerPage[i].text.substring(1);
      }
    }
  }
}

let verse1 = new Lyric(
  "1. Một tấm bánh trắng chúng con hiệp dâng, nguyện nên sức thiêng dưỡng nuôi trần gian. Một ly rượu nho thắm hương thơm ngát, sự sống muôn đời chính Cha ban tặng."
);
let verse2 = new Lyric(
  "2. Rộn vang giai khúc tán dương ngợi ca, kỳ công khắp nơi chính Cha làm ra. Ngài gieo khúc hát trong lòng con mãi, nguyện suốt cuộc đời hát khen Danh Ngài."
);

let chorus = new Lyric(
  "ĐK. Đây tâm tình, lòng con thảo kính, xin tiến dâng Cha với cả tình yêu. Này bánh thơm, đây ly rượu nồng, nguyện Cha đoái thương đến trái tim hồng, rộng ban thánh ân bao la thỏa lòng, con ước mong."
);
let orderOfLyrics = [verse1, chorus, verse2, chorus];

// MAIN
let song1 = new Song("GIAI KHÚC DÂNG TIẾN 4", "Dâng lễ", orderOfLyrics);
let transition1 = new Transition();
let eucharisticYouthSong = new EucharisticYouthSong();
let myPowerpoint = new PowerpointFile(
  [transition1, song1, eucharisticYouthSong],
  "Green"
);
myPowerpoint.write();
myPowerpoint.saveFile(powerpointName);
console.log("Done");
