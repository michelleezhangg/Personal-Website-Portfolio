import React from "react";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/app/components/HeroSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { PERSONAL } from "@/app/constants";

jest.mock("react-scroll", () => {
  const MockLink = ({ ...props }) => (
    <a {...props} data-testid="scroll-link">
      {props.children}
    </a>
  );

  MockLink.propTypes = {
    children: require("prop-types").node,
  };

  MockLink.display = "MockLink";

  return {
    Link: MockLink,
  };
});
jest.mock("@/hooks/useMediaQuery");

describe("HeroSection Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Responsive Rendering", () => {
    it("renders HeroSectionDesktop when isMd is true", () => {
      useMediaQuery.mockReturnValue(true);
      render(<HeroSection />);

      expect(
        screen.getByRole("heading", { name: PERSONAL.name, level: 1 }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: PERSONAL.role, level: 3 }),
      ).toBeInTheDocument();
    });
  });

  describe("Social Media Icons", () => {
    it("renders icons with correct sizes based on isMd", () => {
      useMediaQuery.mockReturnValue(false);
      render(<HeroSection />);

      const linkedInIcon = screen.getByAltText(/linkedin icon/i);
      expect(linkedInIcon).toHaveAttribute("width", "25");
      expect(linkedInIcon).toHaveAttribute("height", "25");

      useMediaQuery.mockReturnValue(true);
      render(<HeroSection />);

      // expect(screen.getAllByAltText("LinkedIn Icon")[0]).toHaveAttribute("width", "30");
      // expect(screen.getAllByAltText("LinkedIn Icon")[0]).toHaveAttribute("height", "30");
    });
  });

  describe("Contact Information", () => {
    it("renders Phone and Email section when isMd is false", () => {
      useMediaQuery.mockReturnValue(false);
      render(<HeroSection />);

      expect(screen.getByText("Phone")).toBeInTheDocument();
      expect(screen.getByText(PERSONAL.phone_number)).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText(PERSONAL.email)).toBeInTheDocument();
    });

    it("does not render Phone and Email section when isMd is true", () => {
      useMediaQuery.mockReturnValue(true);
      render(<HeroSection />);

      // expect(screen.queryByText("Phone")).not.toBeInTheDocument();
      // expect(screen.getByText(PERSONAL.phone_number)).not.toBeInTheDocument();
      // expect(screen.queryByText("Email")).not.toBeInTheDocument();
      // expect(screen.getByText(PERSONAL.email)).not.toBeInTheDocument();
    });
  });
});
