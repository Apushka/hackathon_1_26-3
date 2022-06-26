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

    shapeHTML.style.top = `${random(0, 70)}%`;
    shapeHTML.style.left = `${random(0, 70)}%`;

    document.body.append(shapeHTML);
    setTimeout(() => {
      shapeHTML.remove();
    }, 10000);
  }  
}
