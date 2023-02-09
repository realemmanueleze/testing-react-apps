import { screen, render } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders properly", () => {
  render(<Greet />);
  const text = screen.getByText(/Hello/i);
  expect(text).toBeInTheDocument();
});

test.skip("Greet renders renders with props", () => {
  render(<Greet name="Joy"/>);
  const text = screen.getByText(/Hello Joy/i);
  expect(text).toBeInTheDocument();
});
