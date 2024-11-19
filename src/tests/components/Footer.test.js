import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "@/app/components/Footer";
import { PERSONAL } from "@/app/constants";

// Mock react-scroll
jest.mock("react-scroll", () => ({
  animateScroll: {
    scrollToTop: jest.fn(),
  },
}));

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the name and role", () => {
    expect(
      screen.getByRole("heading", { name: PERSONAL.name, level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: PERSONAL.role, level: 3 }),
    ).toBeInTheDocument();
  });

  it("renders the copyright text with correct content", () => {
    expect(
      screen.getByText(/© 2024 Michelle Zhang. All rights reserved./i),
    ).toBeInTheDocument();
  });

  it("containers Link wrapping the name and role", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
    expect(linkElement).toContainElement(screen.getByText(PERSONAL.name));
    expect(linkElement).toContainElement(screen.getByText(PERSONAL.role));
  });

  it("calls scrollToTop when link is clicked", () => {
    const link = screen.getByText(PERSONAL.name).closest("a");
    fireEvent.click(link);
    expect(
      require("react-scroll").animateScroll.scrollToTop,
    ).toHaveBeenCalled();
  });
});
