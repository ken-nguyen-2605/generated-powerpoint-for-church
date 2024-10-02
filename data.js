import PptxGenJS from "pptxgenjs";
const powerpointName = "Demo";
const acceptedContentFontSize = [60, 61, 62, 63, 64, 65, 66];
const characterPerSlideLimit = 170;
const greenTheme = "theme_files/green.jpg";
const redTheme = "theme_files/red.jpg";
const purpleTheme = "theme_files/purple.jpg";
const layoutProps = {
  name: "Church",
  width: 13.3334645669,
  height: 7.5,
};

function boxModel(x, y) {
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
    line: { color: "F3FF95", width: 2 , transparency: 40},
  };
}

const moiCacEmQuyProps = {
  path: "./images/moiCacEmQuy.jpg",
  x: 6.22440945,
  y: 0.208661417,
  w: 5.19291339,
  h: layoutProps.height - 2 * 0.208661417,
};

const tinMungProps = {
  path: "./images/tinMung.png",
  x: 1.65354331,
  y: 0.334645669,
  w: 7.16929134,
  h: 6.83464567,
};

const mauNhiemDucTinProps = {
  path: "./images/mauNhiemDucTin.png",
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

const logoXuDoanProps = {
  path: "./images/logoXuDoan.png",
  x: 0.7716535433,
  y: 0.3622047244,
  w: 2.3307086614,
  h: 2.3307086614,
};
const namMucVuProps = {
  path: "./images/namMucVu2024.png",
  x: layoutProps.width - 3.4173228346,
  y: 0,
  w: 3.4173228346,
  h: 3.4173228346,
};

const sectionOfTitleProps = {
  x: 0.8307086614,
  y: 2.7913385827,
  w: "20%",
  h: 0.842519685,
  color: "FFFFFF",
  fontFace: "Times New Roman",
  fontSize: 44,
  bold: true,
  align: "left",
  valign: "top",
};

function titlePropsWithY(y = "52%") {
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

function lyricsPropsWithFontSize({
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

export {
  moiCacEmQuyProps,
  powerpointName,
  layoutProps,
  greenTheme,
  redTheme,
  purpleTheme,
  logoXuDoanProps,
  namMucVuProps,
  sectionOfTitleProps,
  acceptedContentFontSize,
  characterPerSlideLimit,
  tinMungProps,
  mauNhiemDucTinLMProps,
  mauNhiemDucTinCongDoanProps,
  mauNhiemDucTinProps,
  lyricsPropsWithFontSize,
  titlePropsWithY,
  boxModel,
};
