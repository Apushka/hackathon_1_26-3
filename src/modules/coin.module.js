import {Module} from '../core/module'
import {handleContext, random} from '../utils'

export class CoinModule extends Module {

    trigger() {
        const coinContainer = document.createElement('div');
        coinContainer.className = 'coin-container';
        const coinText = document.createElement('div');
        coinText.className = 'coin-text';

        const gifCoin = document.createElement('img');
        gifCoin.src = './src/assets/coin/coin.gif';
        gifCoin.className = 'gif-coin'

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
            document.body.removeEventListener('contextmenu', handleContext, true);
            coinContainer.remove();
        }, 5000);

        document.body.addEventListener('contextmenu', handleContext, true);
    }
}