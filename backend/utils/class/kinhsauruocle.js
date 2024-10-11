import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
import { lyricsPropsWithFontSize } from "./base-const/another.js";
export default class KinhSauRuocLe {
  constructor() {
    this.pages = [
      new FirstPage(
        "KINH CÁM ƠN SAU KHI\nRƯỚC LỄ",
        "Lạy Chúa Giêsu, con tin Chúa đang ngự trong lòng con. Con cung kính thờ lạy Chúa là Thiên Chúa uy nghi cao cả.",
        {
          title: {
            x: "0%",
            y: 0.165354331,
            w: "100%",
            h: "20%",
            color: "FFFF00",
            fontFace: "Times New Roman",
            fontSize: 66,
            bold: true,
            align: "center",
            valign: "top",
          },
          text: lyricsPropsWithFontSize({ fontSize: 66, y: "30%" }),
        }
      ),
      new SecondPage(
        "Con sung sướng vì Chúa đến thăm con, dù con không xứng đáng. Lạy Chúa Giêsu, xin ở lại với con mãi mãi, trong suốt cuộc đời con."
      ),
      new SecondPage(
        "Xin làm cho con nên giống Chúa: hiền hậu và khiêm nhường, chăm chỉ và bác ái, hiếu thảo và vui tươi. Xin làm cho con nhớ rằng:"
      ),
      new SecondPage(
        '"Chúa đang ngự trong con, và con có bổn phận đem Chúa đến mọi nơi, ở nhà và ở trường, trong khu xóm và ngoài đường phố"'
      ),
      new SecondPage(
        "Để tất cả những người bạn của con nhận biết Chúa, và sống yêu thương nhau."
      ),
      new SecondPage(
        "Lạy Chúa Giêsu, con quyết tâm sống theo lời Chúa dạy, để đáp lại tình Chúa yêu con."
      ),
      new SecondPage(
        "Có Chúa, con không sợ hy sinh. Có Chúa, con đủ sức tránh xa tội lỗi và sống trung thành với Chúa suốt đời con."
      ),
      new SecondPage(
        "Lạy Chúa Giêsu, con yêu mến Chúa. Lạy Chúa Giêsu, con yêu mến Chúa biết bao.",
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
