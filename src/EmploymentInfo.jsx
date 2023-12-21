import { useState } from "react";
import AddContentForm from "./AddContentForm";

export default function EmploymentInfo() {
	const [employmentData, setEmploymentData] = useState({
		company: "",
		location: "",
		title: "",
		startDate: "",
		endDate: "",
		jobSkills: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		// setEmploymentData()
	};

	return (
		<div>
			<form
				key="employment-form"
				onSubmit={handleSubmit}
				className="form-control p-3 m-2"
			>
				<AddContentForm
					input="Company"
					type="text"
					placeholder="Temples of Syrinx"
				/>
				<AddContentForm
					input="Location"
					type="text"
					placeholder="Cygnus-X1, Milky Way"
				/>
				<AddContentForm input="Title" type="text" placeholder="Working Man" />
				<AddContentForm
					input="Start Date"
					type="text"
					placeholder="21-12-2112"
				/>
				<AddContentForm input="End Date" type="text" placeholder="Present" />
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
					// onClick={handleSubmit}
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
