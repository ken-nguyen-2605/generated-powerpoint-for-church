import { greenTheme, redTheme, purpleTheme } from "./base-const/theme.js";
import { layoutProps } from "./base-const/props.js";
import PptxGenJS from "pptxgenjs";

export default class PowerpointFile {
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

  // saveFile() {
  //   // this.powerpoint.writeFile({ fileName: powerpointName });
  //   console.log("FAIL");
  //   return this.powerpoint.write("nodebuffer");
  // }
}
