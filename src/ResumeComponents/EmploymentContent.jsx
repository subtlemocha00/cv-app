import PropTypes from "prop-types";

export default function EmploymentContent({ employmentInfo }) {
	EmploymentContent.propTypes = {
		employmentInfo: PropTypes.arrayOf(
			PropTypes.shape({
				company: PropTypes.string,
				title: PropTypes.string,
				city: PropTypes.string,
				country: PropTypes.string,
				startDate: PropTypes.shape({
					month: PropTypes.string,
					year: PropTypes.string,
				}),
				endDate: PropTypes.shape({
					month: PropTypes.string,
					year: PropTypes.string,
				}),
				skills: PropTypes.arrayOf(PropTypes.string),
			})
		),
	};

	const jobInfo = [...employmentInfo];
	return (
		<section>
			<h3 className="bg-secondary row m-0 mt-1 p-3 text-white col col-12">
				Employment
			</h3>
			{jobInfo.map((job, index) => (
				<div key={index}>
					<h4 className="m-2">{job.company}</h4>
					<h5 className="m-2">{job.title}</h5>
					<div className="row p-2">
						<span className="col col-fluid ms-2">
							<em>
								{job.city}, {job.country}
							</em>
						</span>
						<span className="col col-fluid text-end me-2">
							<em>
								{job.startDate.month} {job.startDate.year} - {job.endDate.month}{" "}
								{job.endDate.year}
							</em>
						</span>
					</div>
					<ul>
						{job.skills.map((skill) => (
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
