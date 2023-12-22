import "./App.css";
import "./ResumeComponents/ResumeDisplay.css";
import ResumeDisplay from "./ResumeComponents/ResumeDisplay.jsx";
import EducationInfo from "./EducationInfo.jsx";
import EmploymentInfo from "./EmploymentInfo";
import TitleBlock from "./TitleBlock.jsx";
import GeneralInfo from "./GeneralInfo.jsx";

function App() {
	return (
		<div>
			<TitleBlock />
			<div className="d-flex">
				<div className="d-flex flex-column w-25">
					<GeneralInfo />
					<EmploymentInfo />
					<EducationInfo />
				</div>
				<ResumeDisplay />
			</div>
		</div>
	);
}

export default App;
