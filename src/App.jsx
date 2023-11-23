import "./App.css";
import EducationInfo from "./EducationInfo.jsx";
import EmploymentInfo from "./EmploymentInfo.jsx";
import GeneralInfo from "./GeneralInfo.jsx";
import ResumeDisplay from "./ResumeDisplay.jsx";
import TitleBlock from "./TitleBlock.jsx";

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
				<ResumeDisplay />
			</div>
		</div>
	);
}

export default App;
