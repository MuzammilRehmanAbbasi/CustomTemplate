import { useEffect } from "react";
import { startRipple } from "../util/dom";

function Ripple({ id, color, ...props }) {
	useEffect(() => {
		startRipple(id, color);
	});
	return <span {...props} className="ripple-container" />;
}

export default Ripple;
