import PropTypes from "prop-types";

export default function Header({ personalInfo }) {
	// validates the prop types
	Header.propTypes = {
		personalInfo: PropTypes.shape({
			userName: PropTypes.string,
			userEmail: PropTypes.string,
			userPhone: PropTypes.string,
			userLocation: PropTypes.string,
		}),
	};
	console.log("personal info HEADER: ", personalInfo);
	return (
		<section className="container p-0">
			<div className="row m-0 p-2 col col-12">
				<h1 id="name">{personalInfo.userName}</h1>
				<div className="p-1 d-flex justify-content-around">
					<h6>
						<i className="fas fa-envelope"></i>{" "}
						<span id="email">{personalInfo.userEmail}</span>
					</h6>
					<h6>
						<i className="fas fa-phone"></i>{" "}
						<span id="phone">{personalInfo.userPhone}</span>
					</h6>
					<h6>
						<i className="fas fa-map-marker"></i>{" "}
						<span id="location">{personalInfo.userLocation}</span>
					</h6>
				</div>
			</div>
		</section>
	);
}
