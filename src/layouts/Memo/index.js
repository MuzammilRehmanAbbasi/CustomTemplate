import { memo, useState } from "react";

function RednerComponent({ name }) {
	console.log(`${name} rendered again`);
	return <div>{name}</div>;
}

const Memoed = memo(RednerComponent);

function Memo() {
	const [name, setName] = useState("muzammil");
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setName(name === "muzammil" ? "junaid" : "muzammil");
	};
	const handleCount = () => {
		setCount(count + 1);
		setName(name);
	};

	return (
		<>
			<Memoed name={name} />
			<button onClick={handleClick}>Click</button>
			<button onClick={handleCount}>Count</button>
			<div>Count: {count}</div>
		</>
	);
}

export default Memo;
