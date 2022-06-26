import { Module } from '../core/module';
import { handleContext, random } from '../utils';
import drumsImage from '../assets/drums/drums.jpg';
import closeImg from '../assets/drums/close.png';
import snare from '../assets/drums/sounds/snare.mp3';
import kick from '../assets/drums/sounds/kick.mp3';
import tom1 from '../assets/drums/sounds/tom1.mp3';
import tom2 from '../assets/drums/sounds/tom2.mp3';
import tom3 from '../assets/drums/sounds/tom3.mp3';
import hhat from '../assets/drums/sounds/hhat.mp3';
import ride from '../assets/drums/sounds/ride.mp3';
import crash from '../assets/drums/sounds/crash.mp3';

export class StageModule extends Module {

    trigger() {
        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.width = '100%';
        container.style.height = '100vh';
        container.style.background = 'rgba(0, 0, 0, 0.5)';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';

        const drumsImg = document.createElement('img');
        drumsImg.display = 'block';
        drumsImg.style.width = '40%';
        drumsImg.src = drumsImage;
        drumsImg.style.position = 'relative';
        drumsImg.style.borderRadius = '50px';
        drumsImg.style.zIndex = '100';

        container.append(drumsImg);

        const closeButton = document.createElement('img');
        closeButton.src = closeImg;
        closeButton.style.width = '40px';
        closeButton.style.height = '40px';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '15px';
        closeButton.style.right = '15px';

        container.append(closeButton);

        document.body.append(container);

        function highlightKey(message) {
            const highlight = document.createElement('div');
            highlight.textContent = message;
            highlight.style.position = 'absolute';
            highlight.style.fontSize = random(12, 48) + 'px';
            highlight.style.top = random(0, 20) + '%';
            highlight.style.left = random(0, 90) + '%';
            highlight.style.zIndex = '150';
            highlight.style.color = '#ebebeb';
            highlight.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
            container.append(highlight);

            setTimeout(() => {
                highlight.remove();
            }, 1000);
        }

        function onMouseOver() {
            closeButton.style.filter = 'invert(75%)';
        }

        function onMouseOut() {
            closeButton.style.filter = 'none';
        }

        function handleKeyPress(e) {
            let audio;
            let message;
            switch (e.key) {
                case 'h':
                    audio = new Audio(kick);
                    message = 'Бас-барабан';
                    break;
                case 'f':
                    audio = new Audio(hhat);
                    message = 'Хай-хет';
                    break;
                case 'g':
                    audio = new Audio(snare);
                    message = 'Малый-барабан';
                    break;
                case 't':
                    audio = new Audio(tom1);
                    message = 'Рэк-том 1';
                    break;
                case 'y':
                    audio = new Audio(tom2);
                    message = 'Рэк-том 2';
                    break;
                case 'u':
                    audio = new Audio(tom3);
                    message = 'Флор-том';
                    break;
                case 'r':
                    audio = new Audio(crash);
                    message = 'Тарелка крэш';
                    break;
                case 'i':
                    audio = new Audio(ride);
                    message = 'Тарелка райд';
                    break;
                default: return;
            }
            highlightKey(message);
            audio.play();
        }

        closeButton.addEventListener('mouseover', onMouseOver);

        closeButton.addEventListener('mouseout', onMouseOut);

        closeButton.addEventListener('click', () => {
            closeButton.removeEventListener('click', onMouseOver);
            closeButton.removeEventListener('click', onMouseOut)
            document.body.removeEventListener('keypress', handleKeyPress);
            container.remove()
        }, {
            once: true
        })

        container.addEventListener('contextmenu', handleContext);

        document.body.addEventListener('keypress', handleKeyPress);
    }
}