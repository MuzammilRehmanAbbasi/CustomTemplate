import { calculatePercentage } from "../../util/helpers";

function BarGraph({ limit, range, xAxis, data }) {
	let height = 0;
	let width = 0;
	const yAxisPt = [];
	for (let i = limit; i >= 0; i -= range) {
		yAxisPt.push(<div>{i}</div>);
		height += 30;
		width += 25;
	}
	return (
		<div style={{ display: "flex", height: `${height + 20}px` }}>
			<div className="y-axis" style={{ height: `${height}px` }}>
				{yAxisPt}
			</div>
			<div>
				<div
					style={{
						width: `${width}px`,
						height: `${height}px`,
						display: "flex",
						alignItems: "end",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							height: `${calculatePercentage(4, 10)}%`,
							width: "10px",
							backgroundColor: "black",
							borderRadius: "10px",
						}}
					></div>
					<div
						style={{
							height: "100%",
							width: "10px",
							backgroundColor: "black",
							borderRadius: "10px",
						}}
					></div>
					<div
						style={{
							height: "90%",
							width: "10px",
							backgroundColor: "black",
							borderRadius: "10px",
						}}
					></div>
					<div
						style={{
							height: "100%",
							width: "10px",
							backgroundColor: "black",
							borderRadius: "10px",
						}}
					></div>
				</div>
				<div
					className="x-axis"
					style={{ justifyContent: "space-between" }}
				>
					<div>A</div>
					<div>B</div>
					<div>C</div>
					<div>D</div>
				</div>
			</div>
		</div>
	);
}

BarGraph.defaultProps = {
	limit: 40,
	range: 10,
};

export default BarGraph;
