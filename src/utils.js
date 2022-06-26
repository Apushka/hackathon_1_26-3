import { images } from "./data";
import { sounds } from "./data";

export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1))
};

export function getRandomColor(min, max) {
	const letters = "0123456789ABCDEF";
	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += letters[random(min, max)];
	}

	return color;
}

const orders = [4, 1, 7, 2, 8, 3, 2, 6, 5, 8, 1, 3, 5, 4, 6, 7];

export function createArea() {
	const outer = document.createElement('div');
	outer.className = 'doublegame-outer';

	for (let i = 1; i <= 16; i++) {
		const card = document.createElement('div');
		card.className = 'doublegame-item';
		card.dataset.number = orders[i - 1]
		outer.append(card);

		const cardFace = document.createElement('div');
		cardFace.className = 'doublegame-item__face';
		cardFace.textContent = 'Жми';
		card.append(cardFace);

		const cardBack = document.createElement('img');
		cardBack.className = 'doublegame-item__back';
		cardBack.src = images[i - 1];
		card.append(cardBack);
	}

	const closeButton = document.createElement('button');
	closeButton.className = 'doublegame-closeButton';
	closeButton.textContent = 'Закрыть игру';
	outer.append(closeButton);

	return outer;
}

export function blockContext() {
	document.body.addEventListener('contextmenu', handleContext, true);
}

export function unblockContext() {
	document.body.removeEventListener('contextmenu', handleContext, true);
}

function handleContext(e) {
	e.stopPropagation()
}

export function closeGame() {
	document.querySelector('.doublegame-outer').remove();
	unblockContext();
}

export function createCover() {
	const cover = document.createElement('div');
	cover.className = 'doublegame-cover';
	return cover;
}

export function congratulation(outer) {
	const items = document.querySelectorAll('.doublegame-item');
	items.forEach(item => item.remove());
	const congratulationHTML = document.createElement('div');
	congratulationHTML.className = 'doublegame-congratulation';
	congratulationHTML.textContent = 'Поздравляю с победой!!!'
	outer.prepend(congratulationHTML);
}

export function getRandomSound() {
	const soundUrl = sounds[random(0, sounds.length - 1)];
	return soundUrl;
}

