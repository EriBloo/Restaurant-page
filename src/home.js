import content from "./content";

function createElem(elem, value) {
	let element = document.createElement(elem);
	element.textContent = value;

	return element;
}

function elementsHome() {
	const elemArray = [];
	for (const [key, value] of Object.entries(content["home"])) {
		elemArray.push(createElem("h2", key));
		elemArray.push(createElem("h3", value));
	}

	return elemArray;
}

export default elementsHome;