import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
import { lyricsPropsWithFontSize } from "./base-const/another.js";
export default class LayChienThienChua {
  constructor() {
    this.pages = [
      new FirstPage(
        "LẠY CHIÊN THIÊN CHÚA",
        "Lạy Chiên Thiên Chúa Đấng xóa tội trần gian: Xin thương xót chúng con.",
        {
          title: {
            x: "0%",
            y: 0.255354331,
            w: "100%",
            h: "20%",
            color: "FFFF00",
            fontFace: "Times New Roman",
            fontSize: 66,
            bold: true,
            align: "center",
            valign: "top",
          },
          text: lyricsPropsWithFontSize({ fontSize: 66, y: 1.54 }),
        }
      ),
      new SecondPage(
        "Lạy Chiên Thiên Chúa Đấng xóa tội trần gian: Xin thương xót chúng con."
      ),
      new SecondPage(
        "Lạy Chiên Thiên Chúa Đấng xóa tội trần gian: Xin ban bình an cho chúng con."
      ),
    ];
  }

  create(powerpoint, color) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].create(powerpoint, color);
    }
  }
}
