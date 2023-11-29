export default function EmploymentInfo() {
	return (
		<div>
			<form key="employment-form" className="form-control p-3 m-2">
				<label htmlFor="company-name" className="form-label mx-2">
					Company:
				</label>
				<input
					id="company-name"
					type="text"
					className="form-control"
					placeholder="Temples of Syrinx"
				></input>
				<label htmlFor="company-location" className="form-label mx-2">
					Location:
				</label>
				<input
					id="company-location"
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
				<label htmlFor="job-start" className="form-label mx-2">
					Start Date:
				</label>
				<input
					id="job-start"
					type="text"
					className="form-control"
					placeholder="21-12-2112"
				></input>
				<label htmlFor="job-end" className="form-label mx-2">
					End Date:
				</label>
				<input
					id="job-end"
					type="text"
					className="form-control"
					placeholder="Present"
				></input>
				<label htmlFor="job-skills" className="form-label mx-2">
					Job Skills
				</label>

				<textarea
					name="job-skills"
					className="form-control"
					placeholder="Detail your key responsibilities and achievements, e.g., 'Managed a team of 10 in developing marketing strategies, resulting in a 20% increase in annual sales."
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
