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

    it("renders profile image size when isMd is true", () => {
      useMediaQuery.mockReturnValue(true); // Larger screens
      render(<HeroSection />);

      const profileImage = screen.getByAltText("Profile Image");
      expect(profileImage).toHaveAttribute("width", "200");
      expect(profileImage).toHaveAttribute("height", "200");
    });

    it("renders profile image size when isMd is false", () => {
      useMediaQuery.mockReturnValue(false); // Smaller screens
      render(<HeroSection />);

      const profileImage = screen.getByAltText("Profile Image");
      expect(profileImage).toHaveAttribute("width", "175");
      expect(profileImage).toHaveAttribute("height", "175");
    });
  });

  describe("Social Media Icons", () => {
    it("renders icons with correct sizes", () => {
      render(<HeroSection />);

      const linkedInIcon = screen.getByAltText(/linkedin icon/i);
      expect(linkedInIcon).toHaveAttribute("width", "30");
      expect(linkedInIcon).toHaveAttribute("height", "30");
    });
  });

  describe("Contact Information", () => {
    it("renders Phone and Email section when isMd is true", () => {
      useMediaQuery.mockReturnValue(true); // Larger screens
      render(<HeroSection />);

      expect(screen.getByText("Phone")).toBeInTheDocument();
      expect(screen.getByText(PERSONAL.phone_number)).toBeInTheDocument();
      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByText(PERSONAL.email)).toBeInTheDocument();
    });

    it("does not render Phone and Email section when isMd is false", () => {
      useMediaQuery.mockReturnValue(false); // Smaller screens
      render(<HeroSection />);

      expect(screen.queryByText("Phone")).not.toBeInTheDocument();
      expect(screen.queryByText("Email")).not.toBeInTheDocument();
    });
  });
});
