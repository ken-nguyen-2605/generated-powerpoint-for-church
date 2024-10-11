// Input of song slides
import { extractLyrics, extractPreLyrics } from "./base-const/lyrics-manip.js";
import { characterPerSlideLimit } from "./base-const/another.js";
export class Verse {
    constructor(lyric) {
      this.pages = [];
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
          this.pages.push({
            text: page,
            level: 1,
          });
          page = sentences[i];
          characterCount = sentences[i].length;
        }
      }
      this.pages.push({
        text: page,
        level: 1,
      });
      this.pages[0].level = 0;
      // Remove first space character
      // Alternative: remove all level 1 pages
      for (let i = 0; i < this.pages.length; i++) {
        if (this.pages[i].text[0] === " ") {
          this.pages[i].text = this.pages[i].text.substring(1);
        }
      }
    }
  }
  