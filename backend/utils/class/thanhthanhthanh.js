import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
import { lyricsPropsWithFontSize } from "./base-const/another.js";
export class ThanhThanhThanh {
  constructor() {
    this.pages = [
      new FirstPage(
        "THÁNH, THÁNH, THÁNH",
        "Chúa là Thiên Chúa các đạo binh. Trời đất đầy vinh quang Chúa.",
        {
          title: {
            x: "0%",
            y: 0.205354331,
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
        "Hoan hô Chúa trên các tầng trời. Chúc tụng Đấng ngự đến nhân danh Chúa. Hoan hô Chúa trên các tầng trời."
      ),
    ];
  }

  create(powerpoint, color) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].create(powerpoint, color);
    }
  }
}
