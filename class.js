import PptxGenJS from "pptxgenjs";
import {
  powerpointName,
  layoutProps,
  lyricsProps,
  titleProps,
  greenTheme,
  logoXuDoanProps,
  namMucVuProps,
  sectionOfTitleProps,
} from "./data.js";
function extractPreLyrics(content) {
  let preLyrics = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === ".") {
      preLyrics = content.substring(0, i + 1);
      return preLyrics;
    }
  }
  return preLyrics;
}

function extractLyrics(content) {
  let lyrics = "";
  for (let i = 0; i < content.length; i++) {
    if (content[i] === ".") {
      lyrics = content.substring(i + 1);
      return lyrics;
    }
  }
  return lyrics;
}

function calculateFontSize(lyrics) {
  let fontSize = 60;
  if (lyrics.length > 200) {
    fontSize = 40;
  }
  return fontSize;
}

class PowerpointFiles {
  constructor() {
    this.arrSlides = [];
    this.numberOfSlides = 0;

    this.powerpoint = new PptxGenJS();

    // Layout setup
    this.powerpoint.defineLayout(layoutProps);
    this.powerpoint.layout = layoutProps.name;

    // Background setup
    this.powerpoint.defineSlideMaster({
      title: "Green",
      background: { path: greenTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Black",
      background: { color: "000000" },
    });
  }

  createSongSlides(title, section, orderOfLyrics, color) {
    this.createSongTitleSlide(title, section, color);
    for (let i = 0; i < orderOfLyrics.length; i++) {
      this.createSingleContentSlide(orderOfLyrics[i], color);
    }
  }
  createSongTitleSlide(title, section, color) {
    let newSlide = this.powerpoint.addSlide({ masterName: color });
    newSlide.addText(title, titleProps);
    newSlide.addText(section, sectionOfTitleProps);
    newSlide.addImage(logoXuDoanProps);
    newSlide.addImage(namMucVuProps);
    this.arrSlides.push(newSlide);
    this.numberOfSlides++;
  }
  createSingleContentSlide(content, color) {
    // color: "Green" or "Red" or "Purple"
    let preLyrics = extractPreLyrics(content);
    let lyrics = extractLyrics(content);

    let newSlide = this.powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(content);
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
    this.arrSlides.push(newSlide);
    this.numberOfSlides++;
  }

  createTransitionSlide() {
    let newSlide = this.powerpoint.addSlide({ masterName: "Black" });
    this.arrSlides.push(newSlide);
    this.numberOfSlides++;
  }

  saveFile(fileName) {
    this.powerpoint.writeFile({ fileName: powerpointName });
  }
}

class Slide {
  constructor(type) {
    this.type = type;
  }
}

class BlackSlide extends Slide {
  constructor() {
    super("Black");
  }
}

export { PowerpointFiles, BlackSlide };
