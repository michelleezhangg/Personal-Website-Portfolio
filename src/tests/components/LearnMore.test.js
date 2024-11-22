import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LearnMore from "@/app/components/LearnMore";

describe("LearnMore Component", () => {
  const descriptionText = "This is a mock of a detailed description text of the experience.";

  beforeEach(() => {
    render(<LearnMore description={descriptionText} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders just the Learn More button without any description text", () => {
    const button = screen.getByRole("button", { name: /Learn More/i });
    expect(button).toBeInTheDocument();

    const description = screen.queryByText(descriptionText);
    expect(description).not.toBeInTheDocument();
  });

  it("shows description text when Learn More button is clicked and Show Less button is rendered", () => {
    const button = screen.getByRole("button", { name: /Learn More/i });
    fireEvent.click(button);

    const description = screen.queryByText(descriptionText);
    expect(description).toBeInTheDocument();
    expect(button).toHaveTextContent(/Show Less/i);
  });

  it("hides description when Show Less button is clicked", () => {
    const button = screen.getByRole("button", { name: /Learn More/i });
    fireEvent.click(button); // Click "Learn More"
    fireEvent.click(button); // Click "Show Less"

    const description = screen.queryByText(descriptionText);
    expect(description).not.toBeInTheDocument();
    expect(button).toHaveTextContent(/Learn More/i);
  });
});
