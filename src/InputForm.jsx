export default function InputForm({
	input,
	type = "text",
	placeholder = ". . .",
	pattern = null,
}) {
	function handleChange() {
		const inputValue = document.getElementById(
			input.toLowerCase() + "Input"
		).value;
		console.log(inputValue);
		const targetText = document.getElementById(input.toLowerCase());
		console.log(targetText);
		targetText.innerHTML = inputValue;
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
				pattern={pattern}
				onChange={handleChange}
			></input>
		</>
	);
}
