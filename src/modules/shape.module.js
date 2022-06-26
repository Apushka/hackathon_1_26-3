import { Module } from '../core/module';
import { random } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const shapeHTML = document.createElement('div');

    shapeHTML.style.position = 'absolute';
    shapeHTML.style.width = `${random(5, 30)}%`;
    shapeHTML.style.height = `${random(5, 30)}%`;

    shapeHTML.style.background = `rgb(${[0, 0, 0].map(c => String(random(0, 254))).join(',')})`;

    const borderRad = [
      'borderTopLeftRadius', 
      'borderTopRightRadius', 
      'borderBottomLeftRadius',
      'borderBottomRightRadius'
    ];

    borderRad.forEach(br => shapeHTML.style[br] = `${random(0, 200)}%`);

    const shapeWidth = shapeHTML.style.width;
    const shapeHeight = shapeHTML.style.height;
    let shapeWidthPer = Number(shapeWidth.substr(0, shapeWidth.length - 1));
    let shapeHeightPer = Number(shapeHeight.substr(0, shapeHeight.length - 1));
    while (true) {
      const shapeTop = random(0, 100);
      const shapeLeft = random(0, 100);

      if ((shapeTop + shapeHeightPer) <= 100 && (shapeLeft + shapeWidthPer) <= 100) {
        shapeHTML.style.top = `${String(shapeTop)}%`;
        shapeHTML.style.left = `${String(shapeLeft)}%`;
        break;
      }
    }

    document.body.append(shapeHTML);
    setTimeout(() => {
      shapeHTML.remove();
    }, 10000);
  }
}
