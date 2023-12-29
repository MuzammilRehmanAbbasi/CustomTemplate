import { createUseStyles } from "react-jss";
import { colors } from "../../styles/fixed/colors";
import { shadow } from "../../styles/fixed/shadow";
import { size } from "../../styles/fixed/size";

function Card({ sizeX, sizeY, bg, boxShadow, ...props }) {
	const style = createUseStyles({
		tmpcard: {
			width: size[sizeX],
			backgroundColor: colors[bg],
			boxShadow: shadow[boxShadow],
		},
	});
	const classes = style();
	return (
		<div
			{...props}
			className={`tmp-card ${classes.tmpcard}${
				props.className ? " " + props.className : ""
			}`}
		>
			{props.children}
		</div>
	);
}

Card.defaultProps = {
	sizeX: "md",
	sizeY: "md",
	bg: "white",
	boxShadow: "btmRight",
};

export default Card;
