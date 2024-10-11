import { lyricsPropsWithFontSize } from "./base-const/another.js";
import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
export class KinhThuongXot {
  constructor() {
    this.pages = [
      new FirstPage(
        "KINH THƯƠNG XÓT",
        "Xin Chúa thương xót chúng con. Xin Chúa thương xót chúng con.",
        {
          title: {
            x: "0%",
            y: 0.605354331,
            w: "100%",
            h: "20%",
            color: "FFFF00",
            fontFace: "Times New Roman",
            fontSize: 66,
            bold: true,
            align: "center",
            valign: "top",
          },
          text: lyricsPropsWithFontSize({ fontSize: 66, y: 2.04 }),
        }
      ),
      new SecondPage(
        "Xin Chúa Ki-tô thương xót chúng con. Xin Chúa Ki-tô thương xót chúng con."
      ),
      new SecondPage(
        "Xin Chúa thương xót chúng con. Xin Chúa thương xót chúng con."
      ),
    ];
  }

  create(powerpoint, color) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].create(powerpoint, color);
    }
  }
}
