export default function EducationContent() {
	const educationInfo = [
		{
			university: "Syrinx University",
			title: "Spice Specialist",
			city: "Xanadu",
			country: "Alpha Centauri",
			startDate: { month: "Jan", year: "2102" },
			endDate: { month: "Dec", year: "2106" },
			skills: [
				"Modi consectetur voluptate tempore voluptatem quod, perferendis architecto magni sequi temporibus quo repellat quibusdam voluptatum?",
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illo aliquid animi voluptate odit maiores?",
			],
		},
		{
			university: "Signals College",
			title: "Orbital Collection",
			city: "Planet Y",
			country: "Alpha Centauri",
			startDate: { month: "Jan", year: "0111110" },
			endDate: { month: "Dec", year: "1000000" },
			skills: [
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, illo aliquid animi voluptate odit maiores?",
				"Modi consectetur voluptate tempore voluptatem quod, perferendis architecto magni sequi temporibus quo repellat quibusdam voluptatum?",
			],
		},
	];
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
							<em>
								{education.city}, {education.country}
							</em>
						</span>
						<span className="col col-fluid text-end me-2">
							<em>
								{education.startDate.month} {education.startDate.year} -{" "}
								{education.endDate.month} {education.endDate.year}
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
