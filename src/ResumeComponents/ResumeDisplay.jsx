import Header from "./Header";
import EmploymentContent from "./EmploymentContent";
import EducationContent from "./EducationContent";
import "./ResumeDisplay.css";
import defaultData from "../default-data";
import { useState } from "react";

export default function ResumeDisplay({ employmentData, deleteContent }) {
	// console.log("User Info: ", defaultData);
	const [userInfo, setUserInfo] = useState(defaultData);
	let { personalInfo, educationInfo, employmentInfo } = defaultData;
	const [employment, setEmployment] = useState(employmentInfo);
	console.log(employmentData);
	console.log(employment);

	const clearResume = () => {
		setEmployment(null);
	};
	// if (employmentData) {
	// 	setEmployment(employmentData);
	// }
	// console.log("EI: ", employmentInfo);

	return (
		<div className="d-flex flex-column w-75 ms-3">
			<Header personalInfo={personalInfo} onChange={setUserInfo} />
			<EmploymentContent
				employmentInfo={employment}
				deleteContent={deleteContent}
			/>
			<EducationContent educationInfo={educationInfo} />
		</div>
	);
}
