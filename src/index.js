import elementsHome from "./home";

function addToContent(value) {
	const content = document.querySelector("#content");

	for (let val of value) {
		content.appendChild(val);
	}
}

function clearContent() {
	const content = document.querySelector("#content");

	while (content.firstChild) {
		content.removeChild(content.lastChild);
	}
}

addToContent(elementsHome());