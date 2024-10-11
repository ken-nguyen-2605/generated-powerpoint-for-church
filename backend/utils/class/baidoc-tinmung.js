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
