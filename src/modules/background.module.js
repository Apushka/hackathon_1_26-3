import { Module } from '../core/module';
import { random } from '../../src/utils';

export class BackgroundModule extends Module {

    trigger() {
        const letters = "0123456789ABCDEF";
        let color = "#";

        for (let i = 0; i < 6; i++) {
            color += letters[random(0.5, 15)];
        }
        document.body.style.background = color;
    }
}