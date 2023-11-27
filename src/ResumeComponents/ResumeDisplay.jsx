import Header from "./Header";
import EmploymentContent from "./EmploymentContent";
import EducationContent from "./EducationContent";
import "./ResumeDisplay.css";

export default function ResumeDisplay() {
	return (
		<div className="d-flex flex-column ms-3">
			<Header />
			<EmploymentContent />
			<EducationContent />
		</div>
	);
}
