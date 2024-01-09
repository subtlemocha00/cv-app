import "./App.css";
import "./ResumeComponents/ResumeDisplay.css";
import TitleBlock from "./TitleBlock.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import EmploymentInfo from "./EmploymentInfo";
import EducationInfo from "./EducationInfo.jsx";
import Header from "./ResumeComponents/Header.jsx";
import EmploymentContent from "./ResumeComponents/EmploymentContent.jsx";
import EducationContent from "./ResumeComponents/EducationContent.jsx";
import { useState } from "react";
import defaultData from "./default-data";

function App() {
	const [personalInfo, setPersonalInfo] = useState(defaultData.personalInfo);
	const [employment, setEmployment] = useState(defaultData.employmentInfo);
	const [education, setEducation] = useState(defaultData.educationInfo);
	const handleEmploymentSubmit = (newData) => {
		setEmployment((prevState) => [...prevState, newData]);
	};
	const handleEducationSubmit = (newData) => {
		setEducation((prevState) => [...prevState, newData]);
	};
	const deleteContent = (data, id, setData) => {
		const updatedData = data.filter((datum) => {
			return datum.id !== id;
		});
		setData(updatedData);
	};
	const clearResume = (id = "!") => {
		const updatedEdData = education.filter((datum) => {
			return datum.id === id;
		});
		const updatedEmpData = employment.filter((datum) => {
			return datum.id === id;
		});
		setEducation(updatedEdData);
		setEmployment(updatedEmpData);
	};

	return (
		<div>
			<TitleBlock />
			<button onClick={clearResume}>CLEAR RESUME</button>
			<div className="d-flex">
				{/* Input Elements */}
				<div className="d-flex flex-column w-25">
					<GeneralInfo />
					<EmploymentInfo handleSubmit={handleEmploymentSubmit} />
					<EducationInfo handleSubmit={handleEducationSubmit} />
				</div>
				{/* Resume Display Elements */}
				<div className="d-flex flex-column w-75 ms-3">
					<Header personalInfo={personalInfo} />
					<EmploymentContent
						employmentInfo={employment}
						deleteContent={deleteContent}
						setData={setEmployment}
					/>
					<EducationContent
						educationInfo={education}
						deleteContent={deleteContent}
						setData={setEducation}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
