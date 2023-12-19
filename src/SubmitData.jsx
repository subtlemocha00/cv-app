export default function onContentSubmit(input) {
	const listElement = document.getElementById("contentList");
	setContentValueOne(input);
	const contentDiv = document.createElement("li");
	contentDiv.textContent = `${input}`;
	listElement.append(contentDiv);
}
