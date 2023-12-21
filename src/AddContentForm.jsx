export default function AddContentForm({
	input,
	type = "text",
	placeholder = ". . .",
	value,
	pattern = null,
	onChange,
}) {
	return (
		<>
			<label htmlFor={input} className="form-label mx-2 mt-2">
				{input}:
			</label>
			<input
				id={input}
				type={type}
				className="form-control"
				placeholder={placeholder}
				value={value}
				pattern={pattern}
				onChange={onChange}
			></input>
		</>
	);
}
