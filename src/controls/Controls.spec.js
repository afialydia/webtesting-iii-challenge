import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard";

test("Controls render without error", () => {
    render(<Controls />);
});

test("provides buttons to toggle closed states", () => {
    const toggleClosedMock = jest.fn();

    const { getByText } = render(
        <Controls
            locked={false}
            closed={false}
            toggleClosed={toggleClosedMock}
        />);
    fireEvent.click(getByText(/close/i));
    expect(toggleClosedMock).toHaveBeenCalled();

});

test("provides buttons to toggle locked state", () => {

    const toggleLockedMock = jest.fn();
    const { getByText } = render(
        <Controls
            locked={false}
            closed={true}
            toggleLocked={toggleLockedMock}
        />);
    fireEvent.click(getByText(/lock/i));
    expect(toggleLockedMock).toHaveBeenCalled();
});

test("Gate cannot be opened if locked", () => {

    const toggleClosedMock = jest.fn();
    const { getByText } = render(<Controls locked={true} closed={true} toggleClosed={toggleClosedMock} />);

    fireEvent.click(getByText(/open/i));
    expect(toggleClosedMock).toHaveBeenCalledTimes(0);
})

test("Gate cannot be locked if open", () => {
    const toggleLockedMock = jest.fn();

    const { getByText } = render(<Controls locked={false} closed={false} toggleLocked={toggleLockedMock} />);

    fireEvent.click(getByText(/lock/i));
    expect(toggleLockedMock).toHaveBeenCalledTimes(0);
})

test("buttons' text changes to reflect the state of the the door", () => {
    const { getByText } = render(
        <Dashboard
        />);
    fireEvent.click(getByText(/close gate/i));
    getByText(/closed/i);
    fireEvent.click(getByText(/lock gate/i));
    getByText(/locked/i);
    fireEvent.click(getByText(/unlock gate/i));
    getByText(/unlocked/i);
    fireEvent.click(getByText(/open gate/i));
    getByText(/open/i);
});


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open