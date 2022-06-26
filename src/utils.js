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
