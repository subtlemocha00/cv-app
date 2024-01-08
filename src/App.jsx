import "./App.css";
import "./ResumeComponents/ResumeDisplay.css";
import TitleBlock from "./TitleBlock.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import EmploymentInfo from "./EmploymentInfo";
import EducationInfo from "./EducationInfo.jsx";
import Header from "./ResumeComponents/Header.jsx";
import EmploymentContent from "./ResumeComponents/EmploymentContent.jsx";
import EducationContent from "./ResumeComponents/EducationContent.jsx";
import { useEffect, useState } from "react";
import defaultData from "./default-data";

function App() {
	console.log(defaultData);
	const [employmentData, setEmploymentData] = useState({
		companyInput: "",
		locationInput: "",
		titleInput: "",
		startDateInput: "",
		endDateInput: "",
		jobSkills: "",
		id: null,
	});
	const [personalInfo, setPersonalInfo] = useState(defaultData.personalInfo);
	const [employment, setEmployment] = useState(defaultData.employmentInfo);
	const [education, setEducation] = useState(defaultData.educationInfo);
	console.log(employment);
	const handleEmploymentSubmit = (newData) => {
		setEmployment((prevState) => [...prevState, newData]);
	};
	const deleteContent = (e) => {
		const elementId = e.target.id;
		console.log(elementId);
		// console.log(employmentData);
		// const updatedEmploymentData = employmentData.filter((job) => {
		// 	job.id !== elementId;
		// });
		// console.log(updatedEmploymentData);
	};

	useEffect(() => {
		// console.log("ED ", employmentData);
	}, [employmentData]);

	return (
		<div>
			<TitleBlock />
			<div className="d-flex">
				{/* Input Elements */}
				<div className="d-flex flex-column w-25">
					<GeneralInfo />
					<EmploymentInfo handleSubmit={handleEmploymentSubmit} />
					<EducationInfo />
				</div>
				{/* Resume Display Elements */}
				<div className="d-flex flex-column w-75 ms-3">
					<Header personalInfo={personalInfo} />
					<EmploymentContent
						employmentInfo={employment}
						deleteContent={deleteContent}
					/>
					<EducationContent educationInfo={education} />
				</div>
			</div>
		</div>
	);
}

export default App;
