import { Module } from '../core/module';
import { getRandomColor, random } from '../../src/utils';

export class BackgroundModule extends Module {

    trigger() {
        const mainPage = document.querySelector('.main-page');
        mainPage.style.background = getRandomColor(0, 15);;
    }
}