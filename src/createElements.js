import content from "./content";

function createElements(elem, value) {
	let element = document.createElement(elem);
	element.textContent = value;

	return element;
}

function createElementsArray(page) {
	const elemArray = [];
	for (const [key, value] of Object.entries(content[page])) {
		elemArray.push(createElements("h2", key));
		elemArray.push(createElements("h3", value));
	}

	return elemArray;
}

export default createElementsArray;