import {Module} from '../core/module'

export class TimerModule extends Module {

    trigger() {
        const blockTimer = document.createElement('div');
        blockTimer.classList.add('block-timer');
        const formTimer = document.createElement('form');
        const table = document.createElement('table');

        document.body.append(formTimer);
        formTimer.append(table);

        let userValueTimer = [];
        const inputsTimer = [
            {
                id: 'hours',
                text: 'Часы',
                maxValue: 24
            },
            {
                id: 'minutes',
                text: 'Минуты',
                maxValue: 60
            },
            {
                id: 'seconds',
                text: 'Секунды',
                maxValue: 60
            }
        ];

        function createElTimerInHtml(array) {
            const trSubmit = document.createElement('tr');
            const td = document.createElement('td');
            const startButton = document.createElement('button');
            startButton.classList.add('submit-timer');
            startButton.setAttribute('type', 'submit');
            startButton.textContent = 'Старт';
            
            array.forEach((value) => {
                const tr = document.createElement('tr');
                const tdLabel = document.createElement('td');
                const tdInput = document.createElement('td');
                const label = document.createElement('label');
                const input = document.createElement('input');
                label.setAttribute('for', value.id);
                label.textContent = value.text;
                input.id = value.id;
                input.setAttribute('type', 'number');
                input.setAttribute('min', '0');
                input.setAttribute('max', value.maxValue);

                tdLabel.append(label);
                tdInput.append(input);
                tr.append(tdLabel, tdInput);
                table.append(tr);
            });

            td.append(startButton);
            trSubmit.append(td);
            table.append(trSubmit);
        };

        createElTimerInHtml(inputsTimer);

        formTimer.addEventListener('submit', event => {
            event.preventDefault();
            userValueTimer = inputsTimer.map((value) => {
                return Number(event.target[value.id].value);
            })
            document.body.lastChild.remove(formTimer);
            document.body.append(blockTimer);

            setInterval(() => {
                blockTimer.textContent = `${userValueTimer[0]} : ${userValueTimer[1]} : ${userValueTimer[2]}`;
                userValueTimer[2] -= 1;
                if (userValueTimer[0] === 0 && userValueTimer[1] === 0 && userValueTimer[2] < 0) {
                    document.body.lastChild.remove(blockTimer);
                    const textAfterTimer = document.createElement('div');
                    document.body.append(textAfterTimer);
                    textAfterTimer.textContent = 'Пора о чём-то вспомнить!!!';
                }
                if (userValueTimer[2] < 0 && userValueTimer[1] > 0) {
                    userValueTimer[1] -= 1;
                    userValueTimer[2] = 59;
                }
                if (userValueTimer[2] < 0 && userValueTimer[1] <= 0 && userValueTimer[0] > 0) {
                    userValueTimer[0] -= 1;
                    userValueTimer[1] = 59;
                    userValueTimer[2] = 59;
                }
            }, 1000);
        });

    }
}