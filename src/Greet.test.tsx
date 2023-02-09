import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const text = screen.getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("render name", () => {
    render(<Greet name="Joy" />);
    const text = screen.getByText(/Hello Joy/i);
    expect(text).toBeInTheDocument();
  });
});
