import {Module} from '../core/module'
import {ContextMenu} from '../core/menu'

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const square = document.createElement('div');
        square.style.position = 'fixed';
		square.style.zIndex = '20';
		square.style.width = '200px';
		square.style.height = '200px';
		square.style.top = '300px';
		square.style.left = '600px';
		square.style.background = 'linear-gradient(90deg, #342326,#580413,#540021,#580413,#342326)';
		square.style.color = 'white';
		square.style.cursor = 'pointer';
		square.style.display = 'flex';
		square.style.justifyContent = 'center';
		square.style.alignItems = 'center';
		square.style.textAlign = 'center';
		square.style.transition = 'opacity 0.7s ease 0s';

        document.body.append(square);
        let count = 0;

        function clickCounter() {
            square.style.fontSize = '80px';
            square.textContent = count += 1;
        }

        document.body.addEventListener('click', clickCounter);
        
        setTimeout(() => {
            document.body.removeEventListener('click', clickCounter);
            square.style.fontSize = '18px';
            square.textContent = `Вы кликнули ${count} раз`;
        }, 3000);

        setTimeout(() => {
			square.remove();
		}, 5000);
    }
}
