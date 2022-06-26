import { ContextMenu } from "../menu";
import { Background } from "./background.module";
import { Clicks } from "./clicks.module";
import { Coin } from "./coin.module";
import { DoubleGame } from "./double.module";
import { RandomMessage } from "./message.module";
import { ShapeModule } from "./shape.module";
import { RandomSound } from "./sound.module";
import { Stage } from "./stage.module";

export class App {
	#mainpage;

	constructor() {
		this.#mainpage = document.createElement('div');
		this.#mainpage.className = 'main-page';
		document.body.append(this.#mainpage);
		this.#mainpage.innerHTML = 'Насладился фоном?<br> Тогда жамкай на правую кнопку мыши!<br> Там тебя ждут сюрпризы!!!'
		document.body.addEventListener('contextmenu', () => {
			this.#mainpage.textContent = '';
		}, {
			once: true
		})
	}

	start() {
		const contextMenu = new ContextMenu('.menu');
		contextMenu.add(new Clicks('clicks', 'Клик на скорость'));
		contextMenu.add(new Stage('stage', 'Время поиграть'));
		contextMenu.add(new Background('background', 'Изменить цвет'));
		contextMenu.add(new DoubleGame('doublegame', 'Игра "Найди пару"'));
		contextMenu.add(new Coin('coin', 'Орёл или Решка'));
		contextMenu.add(new RandomMessage('message', 'Получить сообщение'));
		contextMenu.add(new ShapeModule('shape', 'Создать фигуру'));
		contextMenu.add(new RandomSound('sound', 'Рандомный звук'));
	}
}