import React from "react";
import { useEffect } from "react";
import { getAbsoluteEl } from "../../util/dom";
import { changePadding } from "../../util/css";
import { compSib } from "../../style_components/ComponentSibling";
import floatinglabel from "../../styles/listeners/floatinglabel";
import Ripple from "../../style_components/Ripple";
import Label from "../../style_components/Label";
import { createUseStyles } from "react-jss";
import { colors } from "../../styles/fixed/colors";

function Input({ id, type, autoComplete, label, color, className, ...props }) {
	useEffect(() => {
		if (label !== "" && compSib[type.toLowerCase()] === "FloatingLabel") {
			let el = getAbsoluteEl(id, "label");
			changePadding(id, el);
			floatinglabel(`${id}`, colors[color]);
		}
	}, [label, id, type, color]);
	const style = createUseStyles({
		tmpinput: {
			borderColor: colors[color],
			"&:focus": {
				outlineColor: colors[color],
			},
			// outline: colors[color],
			// color: colors[color],
		},
		tmplabel: {
			fontColor: colors[color],
		},
	});
	const classes = style();

	return (
		<div className="tmp-input">
			{compSib[type.toLowerCase()] === "Label" && label !== "" && (
				<div className={`tmp-label ${classes.tmplabel}`}>{label}</div>
			)}
			{compSib[type.toLowerCase()] === "FloatingLabel" &&
				label !== "" && <Label label={label} />}
			{compSib[type.toLowerCase()] === "Ripple" && (
				<Ripple id={id} color={colors[color]} />
			)}
			<input
				className={`${classes.tmpinput} ${className}`}
				autoComplete={autoComplete}
				type={type}
				name={id}
				id={id}
				{...props}
			/>
			{compSib[type.toLowerCase()] === "label" && label !== "" && (
				<label htmlFor={id}>{label}</label>
			)}
		</div>
	);
}

Input.defaultProps = {
	id: "name",
	type: "text",
	autoComplete: "off",
	label: "",
	color: "blue",
	className: "",
};

export default Input;
