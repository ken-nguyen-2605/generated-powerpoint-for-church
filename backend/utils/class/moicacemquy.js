import { moiCacEmQuyProps } from "./base-const/props.js";
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
