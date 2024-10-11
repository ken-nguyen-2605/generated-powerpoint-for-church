import _ from "lodash";
import { lyricsPropsWithFontSize } from "./base-const/another.js";

// Với kinh đánh số, thứ nhất khác: "thứ nhất:" + "[space] + nội dung"

class KinhDanhSo {
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

export const kinhTamMoiPhucThat = new KinhDanhSo(
  "KINH\nTÁM MỐI PHÚC THẬT",
  {
    intro: "Phúc Thật Tám Mối:\n",
    thuTu: "Thứ nhất:",
    noiDung:
      " Ai có lòng khó khăn ấy là phúc thật, vì chưng Nước Ðức Chúa Trời là của mình vậy.",
  },
  [
    [
      "Thứ hai: Ai hiền lành ấy là phúc thật, vì chưng sẽ được đất Ðức Chúa Trời làm của mình vậy.",
    ],
    [
      "Thứ ba: Ai khóc lóc ấy là phúc thật, vì chưng sẽ được yên ủi vậy.",
      "Thứ bốn: Ai khao khát nhân đức trọn lành ấy là phúc thật, vì chưng sẽ được no đủ vậy.",
    ],
    [
      "Thứ năm: Ai thương xót người ấy là phúc thật, vì chưng sẽ được thương xót vậy.",
    ],
    [
      "Thứ sáu: Ai giữ lòng sạch sẽ ấy là phúc thật, vì chưng sẽ được thấy mặt Ðức Chúa Trời vậy.",
    ],
    [
      "Thứ bảy: Ai làm cho người hòa thuận ấy là phúc thật, vì chưng sẽ được gọi là con Ðức Chúa Trời vậy.",
    ],
    [
      "Thứ tám: Ai chịu khốn nạn vì Ðạo ngay ấy là phúc thật, vì chưng Nước Ðức Chúa Trời là của mình vậy.",
    ],
  ],
  { tammoiphuc: true }
);

export const kinhNamDieuRan = new KinhDanhSo(
  "KINH NĂM ĐIỀU RĂN",
  {
    intro: "Hội Thánh có năm điều răn:\n",
    thuTu: "Thứ nhất:",
    noiDung:
      " Tham dự Thánh Lễ và kiêng việc xác ngày Chúa Nhật cùng các ngày lễ buộc.",
  },
  [
    [
      "Thứ hai: Xưng tội trong một năm ít là một lần.",
      "Thứ ba: Chịu Mình Thánh Đức Chúa Giêsu trong mùa Phục Sinh.",
    ],
    [
      "Thứ bốn: Kiêng thịt và giữ chay những ngày Hội Thánh buộc.",
      "Thứ năm: Đóng góp theo khả năng cho nhu cầu vật chất của Hội Thánh.",
    ],
  ]
);

export const kinhMuoiDieuRan = new KinhDanhSo(
  "KINH MƯỜI ĐIỀU RĂN",
  {
    intro: "Đạo Đức Chúa Trời có Mười Điều răn:\n",
    thuTu: "Thứ nhất:",
    noiDung:
      " Thờ phượng một Đức Chúa Trời và kính mến Người trên hết mọi sự.",
  },
  [
    [
      "Thứ hai: Chớ kêu tên Đức Chúa Trời vô cớ.",
      "Thứ ba: Giữ ngày Chúa Nhật.",
      "Thứ bốn: Thảo kính cha mẹ.",
    ],
    [
      "Thứ năm: Chớ giết người.",
      "Thứ sáu: Chớ làm sự dâm dục.",
      "Thứ bảy: Chớ lấy của người.",
    ],
    [
      "Thứ tám : Chớ làm chứng dối.",
      "Thứ chín: Chớ muốn vợ chồng người.",
      "Thứ mười: Chớ tham của người.",
    ],
  ],
  {
    lastPage: {
      noiDung:
        "Mười Điều răn ấy tóm về hai điều mà chớ: trước kính mến một Đức Chúa Trời trên hết mọi sự, sau là yêu người như mình ta vậy. ",
      end: "Amen.",
    },
  }
);

