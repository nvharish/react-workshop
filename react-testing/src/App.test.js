import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("this is to test App Component", function () {

  it("checking for message display", function () {
    let { getByText } = render(<App />);
    let messageElement = getByText("Message: welcome");
    expect(messageElement).toBeInTheDocument();
  });

  it("checking for power display", function () {
    let { getByText } = render(<App />);
    let powerElement = getByText("Power: 0");
    expect(powerElement).toBeInTheDocument();
  });

  it("checking for button label display", function () {
    let { getByText } = render(<App />);
    let buttonElement = getByText("Increase Power");
    expect(buttonElement).toBeInTheDocument();
  });

  it("checking for h1 to have text Power", function () {
    let { getByText } = render(<App />);
    let powerElement = getByText("Power: 0");
    let buttonElement = getByText("Increase Power");
    fireEvent.click(buttonElement);
    //fireEvent.click(buttonElement);
    expect(powerElement.textContent).toBe("Power: 1");
  });
})