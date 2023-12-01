import InputForm from "./InputForm";

export default function GeneralInfo() {
	// function handleSubmit() {
	// const nameInput = document.getElementById("name-input");
	// const headerName = document.getElementById("userName");
	// const emailInput = document.getElementById("email-input").value;
	// const phoneInput = document.getElementById("phone-input").value;
	// const locationInput = document.getElementById("location-input").value;
	// nameInput.addEventListener("keyup", () => {
	// headerName.textContent = nameInput.value;
	// console.log(emailInput, phoneInput, locationInput);
	// });
	// }
	return (
		<form key="general-form" className="form-control p-3 m-2">
			<InputForm input="Name" type="text" placeholder="Namey McNameface" />
			<InputForm input="Email" type="email" placeholder="email@mcemail.face" />
			<InputForm
				input="Phone"
				type="tel"
				placeholder="555-123-4567"
				pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
			/>
			<InputForm
				input="Location"
				type="text"
				placeholder="Cygnus X-1, Milky Way"
			/>
			{/* <button
				onClick={handleSubmit}
				type="button"
				className="btn btn-info m-2 text-white border-white"
			>
				<i className="fas fa-plus"></i>
			</button>
			<button
				type="button"
				className="btn btn-info m-2 text-white border-white"
			>
				Cancel
			</button> */}
		</form>
	);
}
