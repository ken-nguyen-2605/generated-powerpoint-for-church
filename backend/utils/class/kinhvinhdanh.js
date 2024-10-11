import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
import { lyricsPropsWithFontSize } from "./base-const/another.js";
export class KinhVinhDanh {
  constructor() {
    this.pages = [
      new FirstPage(
        "KINH VINH DANH",
        "Vinh danh Thiên Chúa trên các tầng trời. Và bình an dưới thế cho người thiện tâm. Chúng con ca ngợi Chúa.",
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
        "Chúng con chúc tụng Chúa. Chúng con thờ lạy Chúa. Chúng con tôn vinh Chúa. Chúng con cảm tạ Chúa, vì vinh quang cao cả Chúa."
      ),
      new SecondPage(
        "Lạy Chúa là Thiên Chúa, là Vua trên trời, là Chúa Cha toàn năng. Lạy Con Một Thiên Chúa, Chúa Giê-su Ki-tô."
      ),
      new SecondPage(
        "Lạy Chúa là Thiên Chúa, là Chiên Thiên Chúa, là Con Đức Chúa Cha. Chúa xóa tội trần gian xin thương xót chúng con."
      ),
      new SecondPage(
        "Chúa xóa tội trần gian xin nhậm lời chúng con cầu khẩn. Chúa ngự bên hữu Đức Chúa Cha xin thương xót chúng con."
      ),
      new SecondPage(
        "Vì lạy Chúa Giê-su Ki-tô chỉ có Chúa là Đấng Thánh, chỉ có Chúa là Chúa, chỉ có Chúa là Đấng Tối Cao."
      ),
      new SecondPage(
        "Cùng Đức Chúa Thánh Thần trong vinh quang Đức Chúa Cha. A-men!"
      ),
    ];
  }

  create(powerpoint, color) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].create(powerpoint, color);
    }
  }
}
