import "./App.css";
import "./ResumeComponents/ResumeDisplay.css";
import ResumeDisplay from "./ResumeComponents/ResumeDisplay.jsx";
import EducationInfo from "./EducationInfo.jsx";
import EmploymentInfo from "./EmploymentInfo";
import TitleBlock from "./TitleBlock.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import defaultData from "./default-data.js";

function App() {
	return (
		<div>
			<TitleBlock />
			<div className="d-flex">
				<div className="d-flex flex-column w-25">
					<GeneralInfo />
					<EducationInfo />
					<EmploymentInfo />
				</div>
				<ResumeDisplay
					personalInfo={defaultData[0].personalInfo}
					employmentInfo={defaultData[0].employmentInfo}
					educationInfo={defaultData[0].educationInfo}
				/>
			</div>
		</div>
	);
}

export default App;
