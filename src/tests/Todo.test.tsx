import { render, screen } from "@testing-library/react";
import Todo from "../Todo";

test('Displays the header', () => {
  render(<Todo />);
  const heading = screen.getByText("Todos");
  expect(heading).toBeInTheDocument();
});


