import PropTypes from "prop-types";

export default function EducationContent(props) {
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

	const educationInfo = [...props.educationInfo];
	return (
		<section>
			<h3 className="bg-secondary row m-0 p-3 text-white col col-12">
				Education
			</h3>
			{educationInfo.map((education, index) => (
				<div key={index}>
					<h4 className="m-2">{education.university}</h4>
					<h5 className="m-2">{education.title}</h5>
					<div className="row p-2">
						<span className="col col-fluid ms-2">
							<em>{education.location}</em>
						</span>
						<span className="col col-fluid text-end me-2">
							<em>
								{education.startDate} - {education.endDate}
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
