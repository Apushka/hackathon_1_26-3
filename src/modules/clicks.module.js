import {Module} from '../core/module'

export class ClicksModule extends Module {

    trigger() {
        const viewTimer = document.createElement('div');
        viewTimer.style.height = '100px';
        viewTimer.style.color = 'white';
        viewTimer.style.marginTop = '60px';
        viewTimer.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
        viewTimer.style.textAlign = 'center';

        const messageTimer = document.createElement('h1');
        const timerInHtml = document.createElement('p');
        timerInHtml.style.fontSize = '40px';

        const square = document.createElement('div');
		square.style.zIndex = '20';
		square.style.width = '200px';
		square.style.height = '200px';
        square.style.margin = '0 auto';
		square.style.background = 'linear-gradient(90deg, #342326,#580413,#540021,#580413,#342326)';
		square.style.color = 'white';
		square.style.display = 'flex';
		square.style.justifyContent = 'center';
		square.style.alignItems = 'center';
		square.style.textAlign = 'center';
		square.style.transition = 'opacity 0.7s ease 0s';

        viewTimer.append(messageTimer);
        viewTimer.append(timerInHtml);
        document.body.append(viewTimer, square);

        let timer;
        let startTimerCounter = 3;
        let count = 0;

        countdown();

        function clickCounter() {
            square.style.fontSize = '80px';
            square.textContent = count += 1;
        }

        function countdown() {
            timerInHtml.innerHTML = startTimerCounter;
            startTimerCounter -= 1;
            if (startTimerCounter < 0) {
                clearTimeout(timer);
                messageTimer.textContent = 'Жми на мышь!';
                timerInHtml.textContent = '';

                document.body.addEventListener('click', clickCounter);

                setTimeout(() => {
                    document.body.removeEventListener('click', clickCounter);
                    messageTimer.textContent = '';
                    square.style.fontSize = '18px';
                    square.textContent = `Вы кликнули ${count} раз`;
                }, 3000);
            } else {
                messageTimer.textContent = 'Приготовьтесь кликать!';
                timer = setTimeout(countdown, 1000);
            }
        }


        setTimeout(() => {
			square.remove();
            viewTimer.remove();
            document.body.removeEventListener('contextmenu', handleContext, true);
		}, 8000);

        function handleContext(e) {
            e.stopPropagation();
        }

        document.body.addEventListener('contextmenu', handleContext, true);
    }
}