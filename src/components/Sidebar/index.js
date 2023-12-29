import { routes } from "../../routes";
import SideButton from "./SideButton";

function Sidebar({ ...props }) {
	const btns = [];
	for (let i = 0; i < routes.length; i++) {
		if (!routes[i].public) {
			btns.push(
				<li key={i}>
					<SideButton
						href={`/${routes[i].path}`}
						title={routes[i].pageName}
						id={i + 1}
					/>
				</li>
			);
		}
	}
	return (
		<div
			style={{
				width: "16.25rem",
				backgroundColor: "var(--blue)",
				borderRadius: "3px",
			}}
			className="tmp-side"
		>
			<div className="tmp-side-header">Header</div>
			<ul className="tmp-side-body">{btns}</ul>
		</div>
	);
}

export default Sidebar;
