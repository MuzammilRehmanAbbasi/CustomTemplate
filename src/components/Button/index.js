import Ripple from "../../style_components/Ripple";
import { createUseStyles } from "react-jss";
import { colors } from "../../styles/fixed/colors";

function Button({ Text, id, color, ...props }) {
	const style = createUseStyles({
		tmpbtn: {
			borderColor: colors[color],
			outline: colors[color],
			color: colors[color],
		},
	});
	const classes = style();
	return (
		<div className="tmp-btn">
			<button className={classes.tmpbtn} id={id} {...props}>
				{props.children ? props.children : Text}
			</button>
			<Ripple id={id} color={color} />
		</div>
	);
}
Button.defaultProps = {
	id: "btn",
	Text: "Button",
	color: "blue",
};
export default Button;
