import FirstPage from "./base-const/firstpage.js";
import SecondPage from "./base-const/secondpage.js";
import { lyricsPropsWithFontSize } from "./base-const/another.js";
export class KinhDucChuaThanhThan {
  constructor() {
    this.pages = [
      new FirstPage(
        "KINH\nĐỨC CHÚA THÁNH THẦN",
        "Chúng con lạy ơn Đức Chúa Thánh Thần thiêng liêng sáng láng vô cùng.",
        {
          title: {
            x: "0%",
            y: 0.165354331,
            w: "100%",
            h: "35%",
            color: "FFFF00",
            fontFace: "Times New Roman",
            fontSize: 60,
            bold: true,
            align: "center",
            valign: "top",
          },
          text: lyricsPropsWithFontSize({ fontSize: 60, y: 2.26771654 }),
        }
      ),
      new SecondPage(
        "Chúng con xin Đức Chúa Thánh Thần xuống đầy lòng chúng con, là kẻ tin cậy Đức Chúa Trời, và đốt lửa kính mến Đức Chúa Trời trong lòng chúng con.",
        60
      ),
      new SecondPage(
        "Chúng con xin Đức Chúa Trời cho Đức Chúa Thánh Thần xuống. Sửa lại mọi sự trong ngoài chúng con.",
        60
      ),
      new SecondPage(
        "Chúng con cầu cùng Đức Chúa Trời xưa đã cho Đức Chúa Thánh Thần xuống soi lòng dạy dỗ các Thánh Tông đồ.",
        60
      ),
      new SecondPage(
        "Thì rày chúng con cũng xin Đức Chúa Trời cho Đức Chúa Thánh Thần lại xuống,",
        60
      ),
      new SecondPage(
        "An ủi dạy dỗ chúng con làm những việc lành, vì công nghiệp vô cùng Đức Chúa Giê-su Kitô là Chúa chúng con.",
        60,
        "\nAmen."
      ),
    ];
  }
  create(powerpoint, color) {
    for (let i = 0; i < this.pages.length; i++) {
      this.pages[i].create(powerpoint, color);
    }
  }
}
