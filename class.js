import _ from "lodash";
import {
  moiCacEmQuyProps,
  tinMungProps,
  powerpointName,
  layoutProps,
  greenTheme,
  logoXuDoanProps,
  namMucVuProps,
  sectionOfTitleProps,
  characterPerSlideLimit,
  redTheme,
  purpleTheme,
  lyricsPropsWithFontSize,
  titlePropsWithY,
  mauNhiemDucTinProps,
  mauNhiemDucTinLMProps,
  mauNhiemDucTinCongDoanProps,
  boxModel,
} from "./data.js";

import {
  extractPreLyrics,
  extractLyrics,
  calculateFontSize,
  calcFontDapCa,
} from "./lyrics-manip.js";
import PptxGenJS from "pptxgenjs";

export class PowerpointFile {
  // Put in specific object of section, ex: Song, Transition
  constructor(arrSections = [], themeColor) {
    this.arrSection = arrSections;
    this.powerpoint = new PptxGenJS();
    this.themeColor = themeColor;
    this.setup();
  }
  setup() {
    // Layout size setup
    this.powerpoint.defineLayout(layoutProps);
    this.powerpoint.layout = layoutProps.name;

    // Background setup
    this.powerpoint.defineSlideMaster({
      title: "Green",
      background: { path: greenTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Red",
      background: { path: redTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Purple",
      background: { path: purpleTheme },
    });
    this.powerpoint.defineSlideMaster({
      title: "Black",
      background: { color: "000000" },
    });
  }

  write() {
    for (let i = 0; i < this.arrSection.length; i++) {
      this.arrSection[i].create(this.powerpoint, this.themeColor);
    }
  }

  saveFile(powerpointName) {
    this.powerpoint.writeFile({ fileName: powerpointName });
  }
}

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

export class LayChienThienChua {
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

export class MauNhiemDucTin {
  constructor() {}

  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addImage(mauNhiemDucTinProps);
    newSlide.addText(
      [
        {
          text: "Chủ tế:",
          options: { fontSize: 52, color: "FFFF00", italic: true },
        },
        {
          text: "\nĐây là mầu nhiệm đức tin.",
          options: { fontSize: 60, color: "FFFFFF" },
        },
      ],
      mauNhiemDucTinLMProps
    );
    newSlide.addText(
      [
        {
          text: "Cộng đoàn:",
          options: { fontSize: 52, color: "FFFF00", italic: true },
        },
        {
          text: "\nLạy Chúa cứu thế, Chúa đã dùng thánh giá, và sự phục sinh của Chúa để giải thoát chúng con. Xin cứu độ chúng con.",
          options: { fontSize: 60, color: "FFFFFF" },
        },
      ],
      mauNhiemDucTinCongDoanProps
    );
  }
}

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

export class KinhSauRuocLe {
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

class FirstPage {
  constructor(title, text, firstPageProps) {
    this.title = title;
    this.text = text;
    this.firstPageProps = firstPageProps;
  }
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(this.title, this.firstPageProps.title);
    newSlide.addText(this.text, this.firstPageProps.text);
  }
}

class SecondPage {
  constructor(text, fontSize = 66, end = "") {
    this.text = text;
    this.end = end;
    this.fontSize = fontSize;
  }

  create(powerpoint, color) {
    // If there is no end, text of end is empty -> only text will be displayed
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(
      [
        {
          text: this.text,
          options: lyricsPropsWithFontSize({ fontSize: this.fontSize }),
        },
        {
          text: this.end,
          options: lyricsPropsWithFontSize({
            fontSize: this.fontSize,
            color: "FFFF00",
          }),
        },
      ],
      lyricsPropsWithFontSize({ fontSize: this.fontSize })
    );
  }
}

export class EucharisticYouthSong {
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

// Transition slide
export class Transition {
  constructor() {
    this.color = "Black";
  }
  create(powerpoint, color) {
    powerpoint.addSlide({ masterName: this.color });
  }
}

// Song slide
export class Song {
  // let verse1 = new Lyric("1. Một tấm bánh trắng chúng con hiệp dâng, nguyện nên sức thiêng dưỡng nuôi trần gian. Một ly rượu nho thắm hương thơm ngát, sự sống muôn đời chính Cha ban tặng.");
  // (title, songPart, [verse1, chorus, verse2, chorus])
  constructor(title, songPart, arrVerse = []) {
    // arrVerse : array of Lyric Object
    this.title = title;
    this.songPart = songPart;
    this.arrVerse = arrVerse;
  }

  create(powerpoint, color) {
    this.createTitle(powerpoint, color);
    // Create slides for each verse
    for (let i = 0; i < this.arrVerse.length; i++) {
      // Create different slides for each page of verse
      for (let j = 0; j < this.arrVerse[i].pages.length; j++) {
        switch (this.arrVerse[i].pages[j].level) {
          case 0:
            this.createFirstOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].pages[j].text
            );
            break;
          case 1:
            this.createSecondOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].pages[j].text
            );
            break;
          default:
            console.log("Error: Level of lyric is not defined");
        }
      }
    }
  }

  createTitle(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(this.songPart, sectionOfTitleProps);
    newSlide.addText(this.title, titlePropsWithY());
    newSlide.addImage(logoXuDoanProps);
    newSlide.addImage(namMucVuProps);
  }

  createFirstOrderLyric(powerpoint, color, text) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(text);
    newSlide.addText(
      [
        {
          text: extractPreLyrics(text),
          options: { color: "FFFF00" },
        },
        {
          text: extractLyrics(text),
        },
      ],
      lyricsPropsWithFontSize({ fontSize: fontSize })
    );
  }
  createSecondOrderLyric(powerpoint, color, text) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let fontSize = calculateFontSize(text);
    newSlide.addText(text, lyricsPropsWithFontSize({ fontSize: fontSize }));
  }
}

// Input of song slides
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

export class DapCaVaAlleluia {
  constructor(title, lyrics) {
    this.pages = [];
    this.distributeToPages(lyrics);
    this.title = title;
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
      fontSize: 72,
      bold: true,
      align: "center",
      valign: "top",
    });
    newSlide.addText(
      this.pages[0],
      lyricsPropsWithFontSize({
        fontSize: calcFontDapCa(this.pages[0]),
        y: 1.54,
      })
    ); // calcFontDapCa is used to calculate font size for Dap Ca First Page
    for (let i = 1; i < this.pages.length; i++) {
      let newSlide = powerpoint.addSlide({ masterName: color });
      newSlide.addText(
        this.pages[i],
        lyricsPropsWithFontSize({ fontSize: calculateFontSize(this.pages[0]) })
      );
    }
  }
  // Distribute according to number of characters
  distributeToPages(lyric) {
    // Split the lyric into sentences
    let sentences = lyric.split(/(?<=\.)/);
    // Distribute the sentences into pages
    let page = "";
    let characterCount = 0;
    for (let i = 0; i < sentences.length; i++) {
      // First page: 150 characters
      if (this.pages.length === 0) {
        if (characterCount + sentences[i].length < 150) {
          page += sentences[i];
          characterCount += sentences[i].length;
        } else {
          this.pages.push(page);
          page = sentences[i];
          characterCount = sentences[i].length;
        }
      }
      // Other pages: 170 characters
      else if (characterCount + sentences[i].length < characterPerSlideLimit) {
        page += sentences[i];
        characterCount += sentences[i].length;
      } else {
        this.pages.push(page);
        page = sentences[i];
        characterCount = sentences[i].length;
      }
    }
    this.pages.push(page);
    // Remove first space character
    // Alternative: remove all level 1 pages
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i][0] === " ") {
        this.pages[i] = this.pages[i].substring(1);
      }
    }
  }
}

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

export class TinMung {
  constructor(tinMung) {
    this.tinMung = tinMung;
  }
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addImage(tinMungProps);
    newSlide.addText(this.tinMung, {
      x: 3.0984252,
      y: 1.2519685,
      w: 8.58267717,
      h: 1.20866142,
      color: "FFFFFF",
      outline: { size: 1.6, color: "000000" },
      fontFace: "Times New Roman",
      fontSize: 66,
      bold: true,
      align: "center",
      valign: "top",
    });
  }
}
// Với kinh đánh số, thứ nhất khác: "thứ nhất:" + "[space] + nội dung"
export class KinhDanhSo {
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

export class MoiCacEmQuy {
  constructor() {}
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText("Mời\ncộng đoàn\nvà các em\nquỳ!!", {
      x: 1.66535433,
      y: 0.251968504,
      w: 5.33464567,
      h: 6.66535433,
      color: "000000",
      fontSize: 54,
      fontFace: "Times New Roman",
      bold: true,
      align: "center",
      valign: "middle",
      shape: powerpoint.ShapeType.cloud,
      fill: { color: "FFFFFF" },
      line: { color: "4F81BD", width: 2 },
    });
    newSlide.addImage(moiCacEmQuyProps);
  }
}

export class NavigationPage {
  constructor() {}
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let originalPos = [2.08267717, 0.634645669];
    let width = 4.28740157;
    let height = 1.56535433;
    let xSpace = 0.7533070868999994;
    let ySpace = 0.805354331;
    let section = ["NHẬP LỄ", "DÂNG LỄ", "ĐÁP CA", "HIỆP LỄ", "KẾT LỄ"];
    let position = [
      originalPos,
      [originalPos[0] + width + xSpace, originalPos[1]],
      [originalPos[0], originalPos[1] + ySpace + height],
      [originalPos[0] + width + xSpace, originalPos[1] + ySpace + height],
      [
        originalPos[0] + (width + xSpace) / 2,
        originalPos[1] + 2 * height + 2 * ySpace,
      ],
    ];
    for (let i = 0; i < position.length; i++) {
      newSlide.addText(section[i], boxModel(position[i][0], position[i][1]));
    }
  }
}

export class BaiDocVaTinMung {
  constructor(baidoc2, tinmung) {
    this.baidoc2 = baidoc2;
    this.tinmung = tinmung;
  }
  create(powerpoint, color) {
    let newSlide = powerpoint.addSlide({ masterName: color });
    let text = [
      ["Bài đọc 2:\n", this.baidoc2],
      ["Tin Mừng:\n", this.tinmung],
    ];
    let originalPos = [2.48818898, 0.665354331];
    let width = 8.58267717;
    let height = 2.91732283;
    let ySpace = 0.33464567800000045;
    let position = [
      originalPos,
      [originalPos[0], originalPos[1] + height + ySpace],
    ];
    for (let i = 0; i < text.length; i++) {
      newSlide.addText(
        [
          {
            text: text[i][0],
            options: { underline: true },
          },
          {
            text: text[i][1],
            options: {},
          },
        ],
        {
          x: position[i][0],
          y: position[i][1],
          w: width,
          h: height,
          color: "FFFFFF",
          fontFace: "Times New Roman",
          fontSize: 72,
          bold: true,
          align: "center",
          valign: "middle",
          outline: { size: 1.6, color: "000000" },
          shape: powerpoint.ShapeType.rect,
          fill: { color: "9BC348" },
          line: { color: "F3FF95", width: 2, transparency: 40 },
        }
      );
    }
  }
}
