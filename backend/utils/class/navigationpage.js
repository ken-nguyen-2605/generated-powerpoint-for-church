import { boxModel } from "./base-const/another.js"
export default class NavigationPage {
    constructor() {}
    create(powerpoint, color) {
      let newSlide = powerpoint.addSlide({ masterName: color });
      let originalPos = [2.08267717, 0.634645669];
      let width = 4.28740157;
      let height = 1.56535433;
      let xSpace = 0.7533070868999994;
      let ySpace = 0.805354331;
      let section = ["NHẬP LỄ", "DÂNG LỄ", "ĐÁP CA", "HIỆP LỄ", "KẾT LỄ"];
      let position = [
        originalPos,
        [originalPos[0] + width + xSpace, originalPos[1]],
        [originalPos[0], originalPos[1] + ySpace + height],
        [originalPos[0] + width + xSpace, originalPos[1] + ySpace + height],
        [
          originalPos[0] + (width + xSpace) / 2,
          originalPos[1] + 2 * height + 2 * ySpace,
        ],
      ];
      for (let i = 0; i < position.length; i++) {
        newSlide.addText(section[i], boxModel(position[i][0], position[i][1]));
      }
    }
  }