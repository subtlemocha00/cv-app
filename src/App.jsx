import "./App.css";
import "./ResumeComponents/ResumeDisplay.css";
import ResumeDisplay from "./ResumeComponents/ResumeDisplay.jsx";
import EducationInfo from "./EducationInfo.jsx";
import EmploymentInfo from "./EmploymentInfo";
import TitleBlock from "./TitleBlock.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import { useEffect, useState } from "react";

function App() {
	const [employmentData, setEmploymentData] = useState({
		companyInput: "",
		locationInput: "",
		titleInput: "",
		startDateInput: "",
		endDateInput: "",
		jobSkills: "",
		id: null,
	});
	const handleEmploymentSubmit = (newData) => {
		setEmploymentData(newData);
	};
	const deleteContent = (e) => {
		const elementId = e.target.id;
		console.log(elementId);
		console.log(employmentData);
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
			{/* <input type="text" className="border-0 bg-transparent font-bold"></input> */}
			<div className="d-flex">
				<div className="d-flex flex-column w-25">
					{/* <ButtonBox /> */}
					<GeneralInfo />
					<EmploymentInfo handleSubmit={handleEmploymentSubmit} />
					<EducationInfo />
				</div>
				<ResumeDisplay
					employmentData={employmentData}
					deleteContent={deleteContent}
				/>
			</div>
		</div>
	);
}

export default App;
