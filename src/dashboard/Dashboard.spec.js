import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";
// Test away

test("Dashboard renders correctly", () => {
	render(<Dashboard />);
});

test("Gate defaults to unlocked and open", () => {
	const { getByText, queryByText } = render(<Dashboard />);
	getByText(/open/i);
    expect(queryByText(/open gate/i)).toBeNull();
    getByText(/unlocked/i)
    expect(queryByText(/unlock gate/i)).toBeNull()
});

test("renders controls and display", () => {
	const { getByText, getAllByText } = render(<Dashboard />);
	getByText(/locked/); //controls
	getAllByText(/gate/i); //display
});

// - shows the controls and display
