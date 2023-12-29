import { Link } from "react-router-dom";
import Ripple from "../../style_components/Ripple";

function SideButton({ id, href, title }) {
	return (
		<>
			<Link id={id} to={href}>
				{title}
			</Link>
			<Ripple
				style={{ zIndex: 11, borderRadius: "0" }}
				id={id}
				color="white"
			/>
		</>
	);
}
SideButton.defaultProps = {
	id: "sideBtn1",
	href: "#",
	title: "Click",
};

export default SideButton;
