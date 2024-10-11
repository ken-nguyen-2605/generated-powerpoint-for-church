import PptxGenJS from "pptxgenjs";
import { layoutProps } from "./props.js";
export const powerpointName = "Demo";
export const acceptedContentFontSize = [60, 61, 62, 63, 64, 65, 66];
export const characterPerSlideLimit = 170;

export function boxModel(x, y) {
  return {
    x: x,
    y: y,
    w: 4.28740157,
    h: 1.66535433,
    color: "FFFFFF",
    fontFace: "Times New Roman",
    fontSize: 54,
    bold: true,
    align: "center",
    valign: "middle",
    shape: new PptxGenJS().ShapeType.rect,
    fill: { color: "9BC348" },
    line: { color: "F3FF95", width: 2, transparency: 40 },
  };
}

export function titlePropsWithY(y = "52%") {
  return {
    x: 0,
    y: y,
    w: "100%",
    h: "50%",
    color: "FFFF00",
    fontFace: "Times New Roman",
    fontSize: 72,
    bold: true,
    align: "center",
    valign: "top",
  };
}

export function lyricsPropsWithFontSize({
  fontSize,
  y = 0.3346456693,
  color = "FFFFFF",
}) {
  return {
    x: 0.4173228346,
    y: y,
    w: layoutProps.width - 2 * 0.4173228346,
    h: layoutProps.height - 2 * 0.3346456693,
    color: "FFFFFF",
    fontFace: "Times New Roman",
    fontSize: fontSize,
    color: color,
    bold: true,
    align: "justify",
    valign: "top",
    lineSpacingMultiple: 1.14,
  };
}

