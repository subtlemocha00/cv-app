import PropTypes from "prop-types";
import Header from "./Header";
import EmploymentContent from "./EmploymentContent";
import EducationContent from "./EducationContent";
import "./ResumeDisplay.css";

export default function ResumeDisplay({
	personalInfo,
	employmentInfo,
	educationInfo,
}) {
	// validates the prop types
	ResumeDisplay.propTypes = {
		personalInfo: PropTypes.arrayOf(
			PropTypes.shape({
				userName: PropTypes.string,
				email: PropTypes.string,
				phone: PropTypes.string,
				userLocation: PropTypes.string,
			})
		),
		employmentInfo: PropTypes.arrayOf(
			PropTypes.shape({
				company: PropTypes.string,
				title: PropTypes.string,
				city: PropTypes.string,
				country: PropTypes.string,
				startDate: PropTypes.shape({
					month: PropTypes.string,
					year: PropTypes.string,
				}),
				endDate: PropTypes.shape({
					month: PropTypes.string,
					year: PropTypes.string,
				}),
				skills: PropTypes.arrayOf(PropTypes.string),
			})
		),
		educationInfo: PropTypes.arrayOf(
			PropTypes.shape({
				university: PropTypes.string,
				title: PropTypes.string,
				city: PropTypes.string,
				country: PropTypes.string,
				startDate: PropTypes.shape({
					month: PropTypes.string,
					year: PropTypes.string,
				}),
				endDate: PropTypes.shape({
					month: PropTypes.string,
					year: PropTypes.string,
				}),
				skills: PropTypes.arrayOf(PropTypes.string),
			})
		),
	};
	// const [employmentInfo, setEmploymentInfo] = useState({});
	return (
		<div className="d-flex flex-column w-75 ms-3">
			<Header personalInfo={personalInfo} />
			<EmploymentContent employmentInfo={employmentInfo} />
			<EducationContent educationInfo={educationInfo} />
		</div>
	);
}
