import _ from "lodash";
import {
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
} from "./data.js";

import {
  extractPreLyrics,
  extractLyrics,
  calculateFontSize,
} from "./lyrics-manip.js";
import PptxGenJS from "pptxgenjs";

class PowerpointFile {
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

class KinhTruocRuocLe {
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

class KinhSauRuocLe {
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
  constructor(text, end = "") {
    this.text = text;
    this.end = end;
  }

  create(powerpoint, color) {
    // If there is no end, text of end is empty -> only text will be displayed
    let newSlide = powerpoint.addSlide({ masterName: color });
    newSlide.addText(
      [
        {
          text: this.text,
          options: lyricsPropsWithFontSize({ fontSize: 66 }),
        },
        {
          text: this.end,
          options: lyricsPropsWithFontSize({ fontSize: 66, color: "FFFF00" }),
        },
      ],
      lyricsPropsWithFontSize({ fontSize: 66 })
    );
  }
}

class EucharisticYouthSong {
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
class Transition {
  constructor() {
    this.color = "Black";
  }
  create(powerpoint, color) {
    powerpoint.addSlide({ masterName: this.color });
  }
}

// Song slide
class Song {
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
      for (let j = 0; j < this.arrVerse[i].lyricPerPage.length; j++) {
        switch (this.arrVerse[i].lyricPerPage[j].level) {
          case 0:
            this.createFirstOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].lyricPerPage[j].text
            );
            break;
          case 1:
            this.createSecondOrderLyric(
              powerpoint,
              color,
              this.arrVerse[i].lyricPerPage[j].text
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
class Verse {
  constructor(lyric) {
    this.lyricPerPage = [];
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
        this.lyricPerPage.push({
          text: page,
          level: 1,
        });
        page = sentences[i];
        characterCount = sentences[i].length;
      }
    }
    this.lyricPerPage.push({
      text: page,
      level: 1,
    });
    this.lyricPerPage[0].level = 0;
    // Remove first space character
    // Alternative: remove all level 1 pages
    for (let i = 0; i < this.lyricPerPage.length; i++) {
      if (this.lyricPerPage[i].text[0] === " ") {
        this.lyricPerPage[i].text = this.lyricPerPage[i].text.substring(1);
      }
    }
  }
}

let verse1 = new Verse(
  "1. Một tấm bánh trắng chúng con hiệp dâng, nguyện nên sức thiêng dưỡng nuôi trần gian. Một ly rượu nho thắm hương thơm ngát, sự sống muôn đời chính Cha ban tặng."
);
let verse2 = new Verse(
  "2. Rộn vang giai khúc tán dương ngợi ca, kỳ công khắp nơi chính Cha làm ra. Ngài gieo khúc hát trong lòng con mãi, nguyện suốt cuộc đời hát khen Danh Ngài."
);

let chorus = new Verse(
  "ĐK. Đây tâm tình, lòng con thảo kính, xin tiến dâng Cha với cả tình yêu. Này bánh thơm, đây ly rượu nồng, nguyện Cha đoái thương đến trái tim hồng, rộng ban thánh ân bao la thỏa lòng, con ước mong."
);
let orderOfLyrics = [verse1, chorus, verse2, chorus];

// MAIN
let song1 = new Song("GIAI KHÚC DÂNG TIẾN 4", "Dâng lễ", orderOfLyrics);
let transition1 = new Transition();
let eucharisticYouthSong = new EucharisticYouthSong();
let kinhTruocRuocLe = new KinhTruocRuocLe();
let kinhSauRuocLe = new KinhSauRuocLe();
let myPowerpoint = new PowerpointFile(
  [kinhSauRuocLe, kinhTruocRuocLe, transition1, song1, eucharisticYouthSong],
  "Green"
);
myPowerpoint.write();
myPowerpoint.saveFile(powerpointName);
console.log("Done");
