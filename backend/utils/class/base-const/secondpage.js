import { lyricsPropsWithFontSize } from "./another.js";
export default class SecondPage {
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
