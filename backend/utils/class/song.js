import {
  titlePropsWithY,
  lyricsPropsWithFontSize,
} from "./base-const/another.js";
import {
  calculateFontSize,
  extractLyrics,
  extractPreLyrics,
} from "./base-const/lyrics-manip.js";
import {
  logoXuDoanProps,
  namMucVuProps,
  sectionOfTitleProps,
} from "./base-const/props.js";

export class Song {
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
      for (let j = 0; j < this.arrVerse[i].pages.length; j++) {
        switch (this.arrVerse[i].pages[j].level) {
          case 0:
            this.createFirstOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].pages[j].text
            );
            break;
          case 1:
            this.createSecondOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].pages[j].text
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
    newSlide.addText(this.songPart, sectionOfTitleProps);
    newSlide.addText(this.title, titlePropsWithY());
    newSlide.addImage(logoXuDoanProps);
    newSlide.addImage(namMucVuProps);
  }

  createFirstOrderLyric(powerpoint, color, text) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(text);
    newSlide.addText(
      [
        {
          text: extractPreLyrics(text),
          options: { color: "FFFF00" },
        },
        {
          text: extractLyrics(text),
        },
      ],
      lyricsPropsWithFontSize({ fontSize: fontSize })
    );
  }
  createSecondOrderLyric(powerpoint, color, text) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(text);
    newSlide.addText(text, lyricsPropsWithFontSize({ fontSize: fontSize }));
  }
}
