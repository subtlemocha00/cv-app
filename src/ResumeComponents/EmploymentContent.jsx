import PropTypes from "prop-types";

export default function EmploymentContent({
	employmentInfo,
	deleteContent,
	setData,
}) {
	EmploymentContent.propTypes = {
		employmentInfo: PropTypes.arrayOf(
			PropTypes.shape({
				company: PropTypes.string,
				location: PropTypes.string,
				country: PropTypes.string,
				startDate: PropTypes.string,
				endDate: PropTypes.string,
				skills: PropTypes.arrayOf(PropTypes.string),
			})
		),
	};

	const handleDelete = (e) => {
		deleteContent(employmentInfo, e.target.id, setData);
	};

	return (
		<section>
			<h3 className="bg-secondary row m-0 mt-1 p-3 text-white col col-12">
				Employment
			</h3>
			{employmentInfo.map((job) => (
				<div key={job.id}>
					<button
						onClick={handleDelete}
						className="position-absolute mx-3 end-0"
						id={job.id}
					>
						<i className="fas fa-x"></i>
					</button>
					<h4 className="m-2">{job.companyInput}</h4>
					<h5 className="m-2">{job.titleInput}</h5>
					<div className="row p-2">
						<span className="col col-fluid ms-2">
							<em>{job.locationInput}</em>
						</span>
						<span className="col col-fluid text-end me-2">
							<em>
								{job.startDateInput} - {job.endDateInput}
							</em>
						</span>
					</div>
					<ul>
						{job.jobSkills.map((skill) => (
							<li key={skill.length} className="m-2">
								{skill}
							</li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
