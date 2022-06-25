import { Menu } from './core/menu';
//import { PlugOne } from './modules/plugOne';
//import { PlugTwo } from './modules/plugTwo';

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		//this.plugOne = new PlugOne('plugOne', 'Название модуля 1');
		//this.plugTwo = new PlugTwo('plugTwo', 'Название модуля 2');
	};

	open() {
		document.body.addEventListener('contextmenu', event => {
			event.preventDefault();

			this.el.classList.add('open');
			this.el.style.left = event.clientX + 'px';
			this.el.style.top = event.clientY + 'px';
		})
	};

	close() {
		this.el.classList.remove('open');
	};

	add(newModule) {
		this.el.innerHTML += newModule.toHTML();
		const plugOneButton = this.el.querySelector(`[data-type="${newModule.type}"]`);
		plugOneButton.addEventListener('click', newModule.trigger);
	}
}
