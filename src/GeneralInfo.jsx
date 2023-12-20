import InputForm from "./InputForm";

export default function GeneralInfo() {
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
		</form>
	);
}
