import {Module} from '../core/module';
import {random} from '../../src/utils';

export class BackgroundModule extends Module {

  constructor() {
    super('change background', 'Now!')
    this.bodyContainer = document.querySelector('body');
    this.bodyContainer.className = 'body';
    console.log(this.bodyContainer);
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[random(0.5, 15)];
    }
    return color;
  }

  trigger() {
    this.bodyContainer.style.background = this.getRandomColor();
    return this.bodyContainer;
  }
}
