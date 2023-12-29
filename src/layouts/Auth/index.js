import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Text from "../../components/Text";

export default function Auth() {
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="container-center login-container">
			<Card sizeX="sm">
				<form onSubmit={handleSubmit}>
					<Text type="heading" position="center" text={"LOGIN"} />
					<Input type="email" label="Email" name="email" id="email" />
					<Input
						type="password"
						label="Password"
						name="password"
						id="password"
						className="tmp-mb-5"
					/>
					<Button type="submit" id="login">
						Login
					</Button>
				</form>
			</Card>
		</div>
	);
}
