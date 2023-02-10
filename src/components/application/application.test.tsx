import { render, screen } from "@testing-library/react";
import Application from "./Application";

test("Application", () => {
  render(<Application />);
  const nodeContent = screen.getByRole("textbox");
  expect(nodeContent).toBeInTheDocument()
});
