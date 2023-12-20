import { useState } from "react";

export default function EmploymentInfo() {
	const [formData, setFormData] = useState({
		// companyName,
		// location,
		// title,
		// start,
		// end,
		// skills,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<form
				key="employment-form"
				onSubmit={handleSubmit}
				className="form-control p-3 m-2"
			>
				<label htmlFor="companyName" className="form-label mx-2">
					Company:
				</label>
				<input
					id="companyName"
					type="text"
					className="form-control"
					placeholder="Temples of Syrinx"
				></input>
				<label htmlFor="companyLocation" className="form-label mx-2">
					Location:
				</label>
				<input
					id="companyLocation"
					type="text"
					className="form-control"
					placeholder="Cygnus-X1, Milky Way"
				></input>
				<label htmlFor="title" className="form-label mx-2">
					Title:
				</label>
				<input
					id="title"
					type="text"
					className="form-control"
					placeholder="Lead Worker"
				></input>
				<label htmlFor="jobStart" className="form-label mx-2">
					Start Date:
				</label>
				<input
					id="jobStart"
					type="text"
					className="form-control"
					placeholder="21-12-2112"
				></input>
				<label htmlFor="jobEnd" className="form-label mx-2">
					End Date:
				</label>
				<input
					id="jobEnd"
					type="text"
					className="form-control"
					placeholder="Present"
				></input>
				<label htmlFor="jobSkills" className="form-label mx-2">
					Job Skills
				</label>

				<textarea
					id="jobSkills"
					className="form-control"
					placeholder="Detail your key responsibilities and achievements, e.g., 'Managed a team of 10 in developing marketing strategies, resulting in a 20% increase in annual sales."
				></textarea>

				<button
					type="submit"
					className="btn btn-info m-2 text-white border-white"
				>
					<i className="fas fa-plus"></i>
				</button>
				<button
					id="cancelBtn"
					type="button"
					className="btn btn-info m-2 text-white border-white"
				>
					Cancel
				</button>
			</form>
		</div>
	);
}
