import BarGraph from "../../components/Graphs/BarGraph";
import Sidebar from "../../components/Sidebar";

function Dashboard() {
	return (
		<div
			style={{
				display: "flex",
				height: "calc(100% - 20px)",
				padding: "10px",
			}}
		>
			<Sidebar />
			<BarGraph />
		</div>
	);
}

export default Dashboard;
