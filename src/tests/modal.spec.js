import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Modal from "../Modal";

describe("Modal", () => {
    test("renders without crashing", () => {
        render(<Modal />);
    });

    test("renders modal with title and content", () => {
        const title = "Test Modal";
        const content = "This is a test modal";
        render(<Modal title={title} content={content} />);

        const modalTitle = screen.getByText(title);
        const modalContent = screen.getByText(content);

        expect(modalTitle).toBeInTheDocument();
        expect(modalContent).toBeInTheDocument();
    });

    test("calls button onClick when button is clicked", () => {
        const onClick = jest.fn();
        const buttons = [{ label: "Button", onClick }];
        render(<Modal buttons={buttons} />);

        const button = screen.getByRole("button", { name: /button/i });
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    test("renders multiple buttons", () => {
        const buttons = [{ label: "Button 1" }, { label: "Button 2" }];
        render(<Modal buttons={buttons} />);

        const button1 = screen.getByRole("button", { name: /button 1/i });
        const button2 = screen.getByRole("button", { name: /button 2/i });

        expect(button1).toBeInTheDocument();
        expect(button2).toBeInTheDocument();
    });

});


