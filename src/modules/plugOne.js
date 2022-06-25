import { Module } from '../core/module'

export class PlugOne extends Module {
	constructor(type, text) {
		super(type, text)
	}

	trigger(event) {
		document.querySelector('.menu').classList.remove('open')

		const square = document.createElement('div')
		square.style.position = 'fixed'
		square.style.zIndex = '20'
		square.style.width = '200px'
		square.style.height = '200px'
		square.style.top = '200px'
		square.style.left = '200px'
		square.style.background = 'linear-gradient(90deg, #342326,#580413,#540021,#580413,#342326)'
		square.style.color = 'white'
		square.style.cursor = 'pointer'
		square.style.display = 'flex'
		square.style.justifyContent = 'center'
		square.style.alignItems = 'center'
		square.style.textAlign = 'center'
		square.style.fontSize = '18px'
		square.style.transition = 'opacity 0.7s ease 0s'
		square.textContent = 'Заглушка1'

		document.body.append(square)

		setTimeout(() => {
			square.remove()
		}, 5000);
	}
}