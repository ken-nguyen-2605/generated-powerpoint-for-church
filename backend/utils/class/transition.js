export class Transition {
  constructor() {
    this.color = "Black";
  }
  create(powerpoint, color) {
    powerpoint.addSlide({ masterName: this.color });
  }
}
