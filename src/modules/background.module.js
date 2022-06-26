import { Module } from '../core/module';
import { getRandomColor, random } from '../../src/utils';

export class BackgroundModule extends Module {

    trigger() {
        document.body.style.background = getRandomColor(0, 16);
    }
}