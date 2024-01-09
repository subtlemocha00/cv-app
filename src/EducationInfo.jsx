import { useState } from "react";
import AddContentForm from "./AddContentForm";
import { v4 as uuidv4 } from "uuid";

export default function EducationInfo({ handleSubmit }) {
	const [educationData, setEducationData] = useState({
		schoolInput: "",
		locationInput: "",
		degreeInput: "",
		startDateInput: "",
		endDateInput: "",
		skills: "",
		id: "",
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		if (id === "skills") {
			setEducationData((prevData) => ({
				...prevData,
				[id]: [value],
			}));
		} else {
			setEducationData((prevData) => ({
				...prevData,
				[id]: value,
			}));
		}
	};

	const handleLocalSubmit = (e) => {
		e.preventDefault();
		const newDataWithId = { ...educationData, id: uuidv4() };
		handleSubmit(newDataWithId);
	};
	return (
		<div>
			<form
				key="education-form"
				onSubmit={handleLocalSubmit}
				className="form-control p-3 m-2"
			>
				<AddContentForm
					input="school"
					type="text"
					placeholder="University of School"
					onChange={handleChange}
					required
				/>
				<AddContentForm
					input="degree"
					type="text"
					placeholder="Bachelor's of Stuff"
					onChange={handleChange}
					required
				/>
				<AddContentForm
					input="location"
					type="text"
					placeholder="Somewhere, Over the Rainbow, Canada"
					onChange={handleChange}
					required
				/>
				<AddContentForm
					input="startDate"
					type="text"
					placeholder="21-12-2112"
					onChange={handleChange}
					required
				/>
				<AddContentForm
					input="endDate"
					type="text"
					placeholder="Present"
					onChange={handleChange}
					required
				/>
				<label htmlFor="skills" className="form-label mx-2">
					Skills
				</label>
				<textarea
					id="skills"
					className="form-control"
					placeholder="Describe key achievements or projects, e.g., 'Led a team research project on renewable energy sources, resulting in a published paper and an academic award."
					onChange={handleChange}
					required
				></textarea>
				<button
					type="submit"
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
		</div>
	);
}
