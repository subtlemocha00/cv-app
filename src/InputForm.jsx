import { useState } from "react";

export default function InputForm({
	input,
	type = "text",
	placeholder = ". . .",
	pattern = null,
}) {
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
				type="text"
				className="form-control"
				placeholder={placeholder}
				pattern={pattern}
				onChange={""}
			></input>
		</>
	);
}
