import { Module } from "../core/module";
import { getRandomSound, handleContext } from "../utils";
import speakerImg from '../assets/sounds/speaker.png';

export class RandomSound extends Module {

    trigger() {
        const speakerLeft = document.createElement('img');
        speakerLeft.src = speakerImg;
        speakerLeft.classList.add('speaker', 'speaker-left');

        const speakerRight = document.createElement('img');
        speakerRight.src = speakerImg;
        speakerRight.classList.add('speaker', 'speaker-right');


        // speakerLeft.style.width = '300px';
        // speakerLeft.style.position = 'absolute';
        // speakerLeft.style.top = '20%';
        // speakerLeft.style.left = '-100%';

        // speakerLeft.style.transform = 'scaleX(-1)';
        // speakerLeft.style.transition = 'all ease 0.5s';
        document.body.append(speakerLeft, speakerRight);
        setTimeout(() => {
            const sound = new Audio(getRandomSound());
            sound.play();
            speakerLeft.style.left = '0%';
            speakerRight.style.right = '0%';
            sound.onended = () => {
                speakerLeft.style.left = '-100%';
                speakerRight.style.right = '-100%';
                document.body.removeEventListener('contextmenu', handleContext, true);
            }
        })

        document.body.addEventListener('contextmenu', handleContext, true);
    }
}