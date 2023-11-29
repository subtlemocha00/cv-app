export default function EducationInfo() {
	return (
		<div>
			<form key="education-form" className="form-control p-3 m-2">
				<label htmlFor="school-input" className="form-label mx-2">
					School:
				</label>
				<input
					name="school-input"
					type="text"
					className="form-control"
					placeholder="University of School"
				></input>
				<label htmlFor="school-location-input" className="form-label mx-2">
					Location:
				</label>
				<input
					name="school-location-input"
					type="text"
					className="form-control"
					placeholder="Somewhere, Over the Rainbow, Canada"
				></input>
				<label htmlFor="degree-input" className="form-label mx-2">
					Degree:
				</label>
				<input
					name="degree-input"
					type="text"
					className="form-control"
					placeholder="Bachelor's of Stuff"
				></input>
				<label htmlFor="start-input" className="form-label mx-2">
					Start Date:
				</label>
				<input
					name="start-input"
					type="text"
					className="form-control"
					placeholder="01-01-2020"
				></input>
				<label htmlFor="end-input" className="form-label mx-2">
					End Date:
				</label>
				<input
					name="end-input"
					type="text"
					className="form-control"
					placeholder="21-12-2112"
				></input>
				<label htmlFor="skills" className="form-label mx-2">
					Skills
				</label>
				<textarea
					name="skills"
					// type="textbox"
					className="form-control"
					placeholder="Describe key achievements or projects, e.g., 'Led a team research project on renewable energy sources, resulting in a published paper and an academic award."
				></textarea>
				<button
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
		</div>
	);
}
