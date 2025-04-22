import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("each <a> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<NavBar />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  expect(container.querySelectorAll("a")).toHaveLength(3);
});


