import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

// Shows the 
test("Display renders without error", () => {
    render(<Display />);
});

test("Displays closed if closed is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
});

test("Displays open if closed is false", () => {
    const { getByText } = render(<Display closed={false} />);
    getByText(/open/i);
});

test("Displays locked if locked is true", () => {
    const { getByText } = render(<Display locked={true} />);
    getByText(/locked/i);
});

test("Displays unlocked if locked is false", () => {
    const { getByText } = render(<Display locked={false} />);
    getByText(/unlocked/i);
});

test("red-led class if locked/closed", () => {
    render(<Display locked={true} closed={true} />);
    expect(document.getElementById("locked").classList.contains("red-led")).toBe(true);
    expect(document.getElementById("closed").classList.contains("red-led")).toBe(true);
});

test("green-led class if unlocked/open", () => {
    render(<Display locked={false} closed={false} />);
    expect(document.getElementById("locked").classList.contains("green-led")).toBe(true);
    expect(document.getElementById("closed").classList.contains("green-led")).toBe(true);
});