import PropTypes from "prop-types";

export default function Header({ personalInfo }) {
	// validates the prop types
	Header.propTypes = {
		personalInfo: PropTypes.arrayOf(
			PropTypes.shape({
				userName: PropTypes.string,
				email: PropTypes.string,
				phone: PropTypes.string,
				userLocation: PropTypes.string,
			})
		),
	};
	const info = personalInfo[0];
	return (
		<section className="container p-0">
			<div className="row m-0 p-2 col col-12">
				<h1>{info.userName}</h1>
				<div className="p-1 d-flex justify-content-around">
					<h6>
						<i className="fas fa-envelope"></i> {info.email}
					</h6>
					<h6>
						<i className="fas fa-phone"></i> {info.phone}
					</h6>
					<h6>
						<i className="fas fa-map-marker"></i> {info.userLocation}
					</h6>
				</div>
			</div>
		</section>
	);
}
