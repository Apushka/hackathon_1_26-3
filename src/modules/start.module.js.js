import { ContextMenu } from "../menu";
import { BackgroundModule } from "./background.module";
import { ClicksModule } from "./clicks.module";
import { CoinModule } from "./coin.module";
import { DoubleGame } from "./double.module";
import { RandomMessage } from "./message.module";
import { ShapeModule } from "./shape.module";
import { StageModule } from "./stage.module";

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
		contextMenu.add(new ClicksModule('clicks', 'Клик на скорость'));
		contextMenu.add(new StageModule('stage', 'Время поиграть'));
		contextMenu.add(new BackgroundModule('background', 'Изменить цвет'));
		contextMenu.add(new DoubleGame('doublegame', 'Игра "Найди пару"'));
		contextMenu.add(new CoinModule('coin', 'Орёл или Решка'));
		contextMenu.add(new RandomMessage('message', 'Получить сообщение'));
		contextMenu.add(new ShapeModule('shape', 'Создать фигуру'));
	}
}