import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/app/components/Footer";
import { PERSONAL } from "@/app/constants";

jest.mock("next/link", () => () => {
  const MockLink = ({ children, href }) => <a href={href}>{children}</a>;

  MockLink.displayName = "MockLink";
  MockLink.propTypes = {
    children: require("prop-types").node,
    href: require("prop-types").string,
  };

  return MockLink;
});

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Footer component with name, role, and copyright text", () => {
    const nameElement = screen.getByText(PERSONAL.name);
    const roleElement = screen.getByText(PERSONAL.role);
    const copyrightElement = screen.getByText(
      /© 2024 Michelle Zhang. All rights reserved./i,
    );

    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
    expect(copyrightElement).toBeInTheDocument();
  });

  it("renders link component around name and role", () => {
    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });
});
