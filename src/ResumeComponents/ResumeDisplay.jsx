import PropTypes from "prop-types";
import Header from "./Header";
import EmploymentContent from "./EmploymentContent";
import EducationContent from "./EducationContent";
import "./ResumeDisplay.css";
import defaultData from "../default-data";
import { useState } from "react";

export default function ResumeDisplay() {
	const [userInfo, setUserInfo] = useState(defaultData);
	let { personalInfo, educationInfo, employmentInfo } = userInfo;
	// console.log("Personal Info: ", personalInfo);
	// const handleChange = () => {};
	return (
		<div className="d-flex flex-column w-75 ms-3">
			<Header personalInfo={personalInfo} onChange={setUserInfo} />
			<EmploymentContent
				employmentInfo={employmentInfo}
				onChange={setUserInfo}
			/>
			<EducationContent educationInfo={educationInfo} />
		</div>
	);
}
