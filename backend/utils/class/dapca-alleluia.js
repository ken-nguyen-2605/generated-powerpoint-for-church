import { lyricsPropsWithFontSize } from "./base-const/another.js";
import { calculateFontSize, calcFontDapCa } from "./base-const/lyrics-manip.js";
import { characterPerSlideLimit } from "./base-const/another.js";
export default class DapCaVaAlleluia {
    constructor(title, lyrics) {
      this.pages = [];
      this.distributeToPages(lyrics);
      this.title = title;
    }
  
    create(powerpoint, color) {
      let newSlide = powerpoint
      .addSlide({ masterName: color });
      newSlide.addText(this.title, {
        x: "0%",
        y: 0.205354331,
        w: "100%",
        h: "20%",
        color: "FFFF00",
        fontFace: "Times New Roman",
        fontSize: 72,
        bold: true,
        align: "center",
        valign: "top",
      });
      newSlide.addText(
        this.pages[0],
        lyricsPropsWithFontSize({
          fontSize: calcFontDapCa(this.pages[0]),
          y: 1.54,
        })
      ); // calcFontDapCa is used to calculate font size for Dap Ca First Page
      for (let i = 1; i < this.pages.length; i++) {
        let newSlide = powerpoint.addSlide({ masterName: color });
        newSlide.addText(
          this.pages[i],
          lyricsPropsWithFontSize({ fontSize: calculateFontSize(this.pages[0]) })
        );
      }
    }
    // Distribute according to number of characters
    distributeToPages(lyric) {
      // Split the lyric into sentences
      let sentences = lyric.split(/(?<=\.)/);
      // Distribute the sentences into pages
      let page = "";
      let characterCount = 0;
      for (let i = 0; i < sentences.length; i++) {
        // First page: 150 characters
        if (this.pages.length === 0) {
          if (characterCount + sentences[i].length < 150) {
            page += sentences[i];
            characterCount += sentences[i].length;
          } else {
            this.pages.push(page);
            page = sentences[i];
            characterCount = sentences[i].length;
          }
        }
        // Other pages: 170 characters
        else if (characterCount + sentences[i].length < characterPerSlideLimit) {
          page += sentences[i];
          characterCount += sentences[i].length;
        } else {
          this.pages.push(page);
          page = sentences[i];
          characterCount = sentences[i].length;
        }
      }
      this.pages.push(page);
      // Remove first space character
      // Alternative: remove all level 1 pages
      for (let i = 0; i < this.pages.length; i++) {
        if (this.pages[i][0] === " ") {
          this.pages[i] = this.pages[i].substring(1);
        }
      }
    }
  }