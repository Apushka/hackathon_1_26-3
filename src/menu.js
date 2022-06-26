import { Menu } from './core/menu';
import { getMenuPosition } from './utils';

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);
		document.body.addEventListener('contextmenu', event => {
			event.preventDefault();
			this.open(event);
		});
	};

	open(event) {
		this.el.classList.add('open');
		getMenuPosition(this.el, event);
		// const { x, y } = calculatePosition(this.el, event);

		// this.el.style.left = x;
		// this.el.style.top = y;
	};

	close() {
		this.el.classList.remove('open');
	};

	add(newModule) {
		this.el.insertAdjacentHTML(
			"beforeend",
			newModule.toHTML()
		)
		const moduleButton = this.el.querySelector(`[data-type="${newModule.type}"]`);
		moduleButton.addEventListener('click', () => {
			newModule.trigger()
			this.close()
		}
		);
	};
}
