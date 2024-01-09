import PropTypes from "prop-types";

export default function EducationContent({
	educationInfo,
	deleteContent,
	setData,
}) {
	EducationContent.propTypes = {
		educationInfo: PropTypes.arrayOf(
			PropTypes.shape({
				university: PropTypes.string,
				title: PropTypes.string,
				location: PropTypes.string,
				startDate: PropTypes.string,
				endDate: PropTypes.string,
				skills: PropTypes.arrayOf(PropTypes.string),
			})
		),
	};

	const handleDelete = (e) => {
		deleteContent(educationInfo, e.target.id, setData);
	};

	return (
		<section>
			<h3 className="bg-secondary row m-0 p-3 text-white col col-12">
				Education
			</h3>
			{educationInfo.map((education) => (
				<div key={education.id}>
					<button
						onClick={handleDelete}
						className="position-absolute mx-3 end-0"
						id={education.id}
					>
						<i className="fas fa-x"></i>
					</button>
					<h4 className="m-2">{education.schoolInput}</h4>
					<h5 className="m-2">{education.degreeInput}</h5>
					<div className="row p-2">
						<span className="col col-fluid ms-2">
							<em>{education.locationInput}</em>
						</span>
						<span className="col col-fluid text-end me-2">
							<em>
								{education.startDateInput} - {education.endDateInput}
							</em>
						</span>
					</div>
					<ul>
						{education.skills.map((skill) => (
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
