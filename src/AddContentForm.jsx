export default function AddContentForm({
	input,
	type = "text",
	placeholder = ". . .",
	value,
	pattern = null,
	handleSubmit,
}) {
	function handleClick() {
		const inputValue = document.getElementById(
			input.toLowerCase() + "Input"
		).value;
		const targetText = document.getElementById(input.toLowerCase());
		targetText.innerHTML = inputValue;
		// console.log(input.toLowerCase());
	}
	return (
		<>
			<label
				htmlFor={input.toLowerCase() + "Input"}
				className="form-label mx-2"
			>
				{input}:
			</label>
			<input
				id={input.toLowerCase() + "Input"}
				type={type}
				className="form-control"
				placeholder={placeholder}
				value={value}
				pattern={pattern}
			></input>
		</>
	);
}
