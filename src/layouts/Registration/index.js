import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Text from "../../components/Text";

export default function Registration() {
	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(formData.get("password"));
	}
	return (
		<div className="container-center login-container">
			<Card sizeX="sm">
				<form onSubmit={handleSubmit}>
					<Text type="heading" position="center" text={"REGISTER"} />
					<Input
						type="email"
						label="Email"
						name="email"
						id="email"
						required
						color="blue"
					/>
					<Input
						type="password"
						label="Password"
						name="password"
						id="password"
						color="blue"
						required
					/>
					<Input
						type="password"
						label="Confirm Password"
						name="c_password"
						id="c_password"
						className="tmp-mb-5"
						color="blue"
						required
					/>
					<Button type="submit" id="register" color="blue">
						Register
					</Button>
				</form>
			</Card>
		</div>
	);
}
