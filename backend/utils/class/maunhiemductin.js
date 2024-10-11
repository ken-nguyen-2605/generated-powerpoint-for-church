import { layoutProps } from "./base-const/props.js";
import path from "path";
import { fileURLToPath } from 'url';
// Convert module URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const mauNhiemDucTinProps = {
  path: path.resolve(__dirname, "../resources/images/mauNhiemDucTin.png"),
  x: 4.0511811,
  y: 0,
  w: layoutProps.width - 2 * 4.08267717,
  h: "100%",
};

const mauNhiemDucTinLMProps = {
  x: 0.497322835,
  y: 0,
  w: layoutProps.width - 2 * 0.497322835,
  h: 1.98425197,
  fontFace: "Times New Roman",
  bold: true,
  align: "justify",
  valign: "top",
  lineSpacingMultiple: 1.02,
};

const mauNhiemDucTinCongDoanProps = {
  x: 0.497322835,
  y: 2.08425197,
  w: layoutProps.width - 2 * 0.497322835,
  h: 5.25984252,
  fontFace: "Times New Roman",
  bold: true,
  align: "justify",
  valign: "top",
  lineSpacingMultiple: 1.02,
};

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
