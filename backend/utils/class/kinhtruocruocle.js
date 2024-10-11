import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
import { lyricsPropsWithFontSize } from "./base-const/another.js";
export class KinhTruocRuocLe {
  constructor() {
    this.pages = [
      new FirstPage(
        "KINH\nDỌN MÌNH RƯỚC LỄ",
        "Lạy Chúa Giêsu, con tin thật Chúa đang ngự trong tấm bánh bé nhỏ trên bàn thờ.",
        {
          title: {
            x: "0%",
            y: 0.165354331,
            w: "100%",
            h: "20%",
            color: "FFFF00",
            fontFace: "Times New Roman",
            fontSize: 72,
            bold: true,
            align: "center",
            valign: "top",
          },
          text: lyricsPropsWithFontSize({ fontSize: 66, y: "35%" }),
        }
      ),
      new SecondPage(
        "Chúa là Thiên Chúa thật và là người thật, đã trở nên lương thực nuôi sống chúng con, trên đường về quê trời."
      ),
      new SecondPage(
        "Chúa muốn ở lại trong con, và con cũng  muốn ước ao rước Chúa vào lòng, để được ở lại trong Chúa."
      ),
      new SecondPage(
        "Nhưng con biết, mình còn nhiều tội lỗi, chẳng đáng Chúa đến thăm. Xin Chúa tẩy sạch quả tim con, để con nên trong trắng."
      ),
      new SecondPage(
        "Xin Chúa mở rộng tâm hồn con, để con đừng từ chối Chúa sự gì. Lạy Chúa Giêsu, con yêu mến Chúa,"
      ),
      new SecondPage(
        "Xin Chúa mau đến với con. Lạy Mẹ Maria xin giúp con xứng đáng đón rước Chúa Giêsu.",
        66,
        " Amen."
      ),
    ];
  }

  create(powerpoint, color) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].create(powerpoint, color);
    }
  }
}
