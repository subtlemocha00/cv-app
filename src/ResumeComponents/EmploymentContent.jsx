import PropTypes from "prop-types";

export default function EmploymentContent({ employmentInfo, deleteContent }) {
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
		deleteContent(e);
	};

	console.log(employmentInfo);

	return (
		<section>
			<h3 className="bg-secondary row m-0 mt-1 p-3 text-white col col-12">
				Employment
			</h3>
			{employmentInfo.map((job, index) => (
				<div key={job.id}>
					<button
						onClick={handleDelete}
						className="position-absolute mx-3 end-0"
						id={job.id}
					>
						X
					</button>
					<h4 className="m-2">{job.company}</h4>
					<h5 className="m-2">{job.title}</h5>
					<div className="row p-2">
						<span className="col col-fluid ms-2">
							<em>{job.location}</em>
						</span>
						<span className="col col-fluid text-end me-2">
							<em>
								{job.startDate} - {job.endDate}
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
