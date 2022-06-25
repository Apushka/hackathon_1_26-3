import {Module} from '../core/module'
import {random} from '../utils'

export class CoinModule extends Module {
    constructor(type, text) {
        super(type, text);
    }

    trigger() {
        const coinContainer = document.createElement('div');
        const coinText = document.createElement('div');
        const gifCoin = document.createElement('img');
        gifCoin.src = './src/assets/coin/coin.gif';
        gifCoin.style.display = 'block';
        gifCoin.style.margin = '200px auto';
        gifCoin.style.width = '600px';
        gifCoin.style.borderRadius = '15px';
        coinText.style.display = 'flex';
        coinText.style.color = 'white';
        coinText.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
        coinText.style.justifyContent = 'center';
        coinText.style.marginTop = '300px';
		coinText.style.fontSize = '50px';

        coinContainer.append(gifCoin);
        document.body.append(coinContainer);
        
        setTimeout(() => {
            coinContainer.firstChild.remove();
            coinContainer.append(coinText);
            let count = random(0, 1);
            if (count === 0) {
                coinText.textContent = 'Орёл';
            } else {
                coinText.textContent = 'Решка';
            }
        }, 3300);

        setTimeout(() => {
            coinContainer.remove();
        }, 5000);
    }
}