import { Module } from '../core/module'
import { random } from '../utils'

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.shapeHTML = document.createElement('div');
    this.shapeHTML.id = 'shaper';
    this.shapeHTML.style.position = 'absolute';

    this.randomFormSize = [
      'width',
      'height',
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius'
    ],
      this.randomColor = `rgb(${[0, 0, 0].map(c => String(random(0, 255))).join(',')})`;
  }

  trigger() {
    this.shapeHTML.style.background = this.randomColor;
    this.randomFormSize.forEach((shapeSlyle) => {
      this.shapeHTML.style[shapeSlyle] = `${random(0, 100)}%`;
    });

    let formWidth = this.shapeHTML.style.width;
   let formHeight = this.shapeHTML.style.height;
    formWidth = +formWidth.substr(0, formWidth.length - 1);
    formHeight = +formHeight.substr(0, formHeight.length - 1);
    while (true) {
      const topCord = random(0, 100);
      const leftCord = random(0, 100);

      if ((formWidth + leftCord) <= 100 && (formHeight + topCord) <= 100) {
        this.shapeHTML.style.top = `${String(topCord)}%`;
        this.shapeHTML.style.left = `${String(leftCord)}%`;
        break;
      }
    }

    document.body.append(this.shapeHTML);
    // setTimeout(() => {
    //   document.querySelector('#shaper')?.remove();
    // }, 4000);
  }
}
