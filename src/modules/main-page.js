export const mainPageRender = () => {
	const mainpage = document.createElement('div');
	mainpage.className = 'main-page';
	document.body.append(mainpage);
	mainpage.textContent = 'Насладился фоном? Тогда жамкай на правую кнопку мыши! Там тебя ждут сюрпризы!!!'
}