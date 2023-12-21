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

	const handleChange = (e) => {
		console.log(e.target.id, " ", e.target.value);
		const { id, value } = e.target;
		setEmploymentData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(employmentData);
	};

	return (
		<div>
			<form
				key="employment-form"
				onSubmit={handleSubmit}
				className="form-control p-3 m-2"
			>
				<AddContentForm
					input="company"
					type="text"
					placeholder="Temples of Syrinx"
					onChange={handleChange}
				/>
				<AddContentForm
					input="location"
					type="text"
					placeholder="Cygnus-X1, Milky Way"
					onChange={handleChange}
				/>
				<AddContentForm
					input="title"
					type="text"
					placeholder="Working Man"
					onChange={handleChange}
				/>
				<AddContentForm
					input="startDate"
					type="text"
					placeholder="21-12-2112"
					onChange={handleChange}
				/>
				<AddContentForm
					input="endDate"
					type="text"
					placeholder="Present"
					onChange={handleChange}
				/>
				<label htmlFor="jobSkills" className="form-label mx-2">
					Job Skills
				</label>
				<textarea
					id="jobSkills"
					className="form-control"
					placeholder="Detail your key responsibilities and achievements, e.g., 'Managed a team of 10 in developing marketing strategies, resulting in a 20% increase in annual sales."
					onChange={handleChange}
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
