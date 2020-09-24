import createElementsArray from "./createElements";

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

(function createEvents() {
	const buttons = document.querySelectorAll(".button");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			clearContent();
			addToContent(createElementsArray(button.getAttribute("data")));
		})
	})
})();

(function defaultPage() {
	addToContent(createElementsArray("home"));
})();