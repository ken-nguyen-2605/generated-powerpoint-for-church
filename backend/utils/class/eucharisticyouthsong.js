import { lyricsPropsWithFontSize, titlePropsWithY } from "./base-const/another.js";
import { logoXuDoanProps, namMucVuProps, sectionOfTitleProps } from "./base-const/props.js";
export default class EucharisticYouthSong {
  constructor() {
    this.pages = [
      "Thiếu nhi Việt Nam đứng lên trong giai đoạn mới. Theo tiếng Giáo Hội và tiếng quê hương kêu mời.",
      "Được trang bị dũng mạnh bằng tinh thần mới. Tuổi trẻ Việt Nam hăng hái xây thế hệ ngày mai.",
      "Cùng đi hỡi các thiếu nhi. Cùng đi với Chúa Kitô, nguồn sống Thánh Thể chan hòa, là lý tưởng của người thiếu nhi hôm nay.",
      "Thiếu nhi Việt Nam quyết tâm trong giai đoạn mới. Thánh hóa môi trường rèn những khả năng phi thường.",
      "Bằng nguyện cầu hi sinh và một bầu khí mới. Tuổi trẻ Việt Nam đem Chúa cho giới trẻ mọi nơi.",
    ];
    this.title = "THIẾU NHI\nTÂN HÀNH CA";
  }
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(this.title, titlePropsWithY("40%"));
    newSlide.addText(this.songPart, sectionOfTitleProps);
    newSlide.addImage(logoXuDoanProps);
    newSlide.addImage(namMucVuProps);

    for (let i = 0; i < this.pages.length; i++) {
      let newSlide = powerpoint.addSlide({ masterName: color });
      newSlide.addText(
        this.pages[i],
        lyricsPropsWithFontSize({ fontSize: 66 })
      );
    }
  }
}
