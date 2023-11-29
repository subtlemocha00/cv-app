export default function GeneralInfo() {
	return (
		<form key="general-form" className="form-control p-3 m-2">
			<label htmlFor="name-input" className="form-label mx-2">
				Name:
			</label>
			<input
				id="name-input"
				type="text"
				className="form-control"
				placeholder="Namey McNameface"
			></input>
			<label htmlFor="email-input" className="form-label mx-2">
				Email:
			</label>
			<input
				id="email-input"
				type="email"
				className="form-control"
				placeholder="email_mcemailface@emailserver.com"
			></input>
			<label htmlFor="phone-input" className="form-label mx-2">
				Phone Number:
			</label>
			<input
				id="phone-input"
				type="tel"
				pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
				className="form-control"
				placeholder="555-123-4567"
			></input>
			<label htmlFor="user-location" className="form-label mx-2">
				Location:
			</label>
			<input
				id="user-location"
				type="text"
				className="form-control"
				placeholder="Cygnus-X1, Milky Way"
			></input>
			<button
				// onClick={updateGeneral()}
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
			</button>
		</form>
	);
}
