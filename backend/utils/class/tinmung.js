import { tinMungProps } from "./base-const/props.js";
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
