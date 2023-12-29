function Text({ text, type, position, ...props }) {
	return (
		<div
			className={`tmp-${type}`}
			style={{ textAlign: position.toLowerCase() }}
		>
			{props.children ? props.children : text}
		</div>
	);
}

Text.defaultProps = {
	text: "Text",
	type: "normal",
	position: "left",
};

export default Text;
