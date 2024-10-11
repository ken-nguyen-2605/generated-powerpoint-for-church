import _ from "lodash";
import { lyricsPropsWithFontSize } from "./base-const/another.js";

// Với kinh đánh số, thứ nhất khác: "thứ nhất:" + "[space] + nội dung"
export default class KinhDanhSo {
    constructor(
      title,
      firstPage,
      otherPages,
      addition = {
        lastPage: {},
        tammoiphuc: false,
      }
    ) {
      // 5 or 8 or 10
      this.title = title;
      this.firstPage = firstPage;
      this.otherPages = otherPages;
      this.addition = addition;
    }
  
    create(powerpoint, color) {
      let newSlide = powerpoint.addSlide({ masterName: color });
      newSlide.addText(this.title, {
        x: "0%",
        y: 0.205354331,
        w: "100%",
        h: "20%",
        color: "FFFF00",
        fontFace: "Times New Roman",
        fontSize: 60,
        bold: true,
        align: "center",
        valign: "top",
      });
      let lyricProps = lyricsPropsWithFontSize({ fontSize: 60, y: 1.2519685 });
      let thuTuProps = {
        fontSize: 60,
        color: "FFFF00",
      };
      if (this.addition.tammoiphuc) {
        lyricProps = lyricsPropsWithFontSize({ fontSize: 60, y: 2.08267717 });
        thuTuProps.underline = true;
      }
      newSlide.addText(
        [
          {
            text: this.firstPage.intro,
            options: { fontSize: 60, color: "FFFFFF" },
          },
          {
            text: this.firstPage.thuTu,
            options: thuTuProps,
          },
          {
            text: this.firstPage.noiDung,
            options: { fontSize: 60, color: "FFFFFF" },
          },
        ],
        lyricProps
      );
      this.createMultiple(powerpoint, color, this.otherPages);
      if (!_.isEmpty(this.addition.lastPage)) {
        newSlide = powerpoint.addSlide({ masterName: color });
        newSlide.addText(
          [
            {
              text: this.addition.lastPage.noiDung,
              options: { fontSize: 60, color: "FFFFFF" },
            },
            {
              text: this.addition.lastPage.end,
              options: { fontSize: 60, color: "FFFF00" },
            },
          ],
          lyricsPropsWithFontSize({ fontSize: 60 })
        );
      }
    }
    createMultiple(powerpoint, color, pages) {
      // [[Thứ nhất: ..., Thứ hai: ...], ...]
      // Page level
      for (let i = 0; i < pages.length; i++) {
        let newSlide = powerpoint.addSlide({ masterName: color });
        // Thứ level
        let arrayThuTu = [];
        for (let j = 0; j < pages[i].length; j++) {
          // Split the text into thứ tự and nội dung
          let thuTu = () => {
            for (let k = 0; k < pages[i][j].length; k++) {
              if (pages[i][j][k] === ":") {
                return pages[i][j].substring(0, k + 1);
              }
            }
          };
          let noiDung = () => {
            for (let k = 0; k < pages[i][j].length; k++) {
              if (pages[i][j][k] === ":") {
                return pages[i][j].substring(k + 1);
              }
            }
          };
          // Set lyric properties and thứ tự properties if tammoiphuc
          let lyricProps = lyricsPropsWithFontSize({ fontSize: 60 });
          let thuTuProps = {
            fontSize: 60,
            color: "FFFF00",
          };
          if (this.addition.tammoiphuc) {
            thuTuProps.underline = true;
          }
          // push thứ tự and nội dung into array
          arrayThuTu.push(
            {
              text: thuTu(),
              options: thuTuProps,
            },
            {
              text: noiDung(),
              options: { fontSize: 60, color: "FFFFFF" },
            }
          );
          // If not the last line of the page
          if (j !== pages[i].length - 1) {
            arrayThuTu.push({
              text: "\n",
              options: { fontSize: 60, color: "FFFFFF" },
            });
          }
          // Add text
          newSlide.addText(arrayThuTu, lyricProps);
        }
      }
    }
  }