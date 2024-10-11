export default class FirstPage {
    constructor(title, text, firstPageProps) {
      this.title = title;
      this.text = text;
      this.firstPageProps = firstPageProps;
    }
    create(powerpoint, color) {
      let newSlide = powerpoint.addSlide({ masterName: color });
      newSlide.addText(this.title, this.firstPageProps.title);
      newSlide.addText(this.text, this.firstPageProps.text);
    }
}