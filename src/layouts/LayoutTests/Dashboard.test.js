import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

test("renders learn react link", () => {
	render(<Dashboard />);
	const linkElement = screen.getByText(/Body/i);
	expect(linkElement).toBeInTheDocument();
});
