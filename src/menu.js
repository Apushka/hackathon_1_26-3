import { Menu } from './core/menu';

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
		this.el.style.left = event.clientX + 'px';
		this.el.style.top = event.clientY + 'px';
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
