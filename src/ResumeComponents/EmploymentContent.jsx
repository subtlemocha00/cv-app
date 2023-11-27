export default function EmploymentContent() {
	const jobInfo = [
		{
			company: "Red Star Capital",
			title: "Space Harvester",
			city: "Planet X",
			country: "Alpha Centauri",
			startDate: { month: "Jan", year: "2112" },
			endDate: { month: "Dec", year: "2112" },
			skills: [
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illo aliquid animi voluptate odit maiores?",
				"Modi consectetur voluptate tempore voluptatem quod, perferendis architecto magni sequi temporibus quo repellat quibusdam voluptatum?",
			],
		},
		{
			company: "Blue Star Capital",
			title: "Orbital Collector",
			city: "Planet Y",
			country: "Alpha Centauri",
			startDate: { month: "Jan", year: "1000010" },
			endDate: { month: "Dec", year: "1000011" },
			skills: [
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illo aliquid animi voluptate odit maiores?",
				"Modi consectetur voluptate tempore voluptatem quod, perferendis architecto magni sequi temporibus quo repellat quibusdam voluptatum?",
			],
		},
	];
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
