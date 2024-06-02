import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello plus name when name is not null", () => {
    render(<Greet name="Vilayat" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello Vilayat/i);
  });

  it("should return button when there is no name ", () => {
    render(<Greet />);
    const btn = screen.getByRole("button");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/login/i);
  });
});
