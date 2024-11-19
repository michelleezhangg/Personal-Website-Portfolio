import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceItem from "@/app/components/ExperienceItem";

// Mock Image component
jest.mock("next/image", () => {
  const MockImage = (props) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

const mockExperienceItem = {
  company: "Test Company",
  position: "Test Position",
  location: "City, CA",
  type: "In Person",
  startDate: "Jan 2024",
  endDate: "Jun 2024",
  team: "Test Team",
  logo: "/test-logo.png",
  bullet1: "Bullet Point 1",
  bullet2: "Bullet Point 2",
  bullet3: "Bullet Point 3",
};

const mockExperienceItemWithoutTeam = {
  company: "Test Company",
  position: "Test Position",
  location: "City, CA",
  type: "In Person",
  startDate: "Jan 2024",
  endDate: "Jun 2024",
  logo: "/test-logo.png",
  bullet1: "Bullet Point 1",
  bullet2: "Bullet Point 2",
  bullet3: "Bullet Point 3",
};

describe("ExperienceItem Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders company name, position, location, and date", () => {
    render(<ExperienceItem {...mockExperienceItem} isMd={false} />);

    expect(screen.getByText(mockExperienceItem.company)).toBeInTheDocument();
    expect(screen.getByText(mockExperienceItem.position)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockExperienceItem.location} (${mockExperienceItem.type})`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockExperienceItem.startDate} - ${mockExperienceItem.endDate}`,
      ),
    ).toBeInTheDocument();
  });

  it("renders logo image with correct src, alt text, and size when isMd is true", () => {
    render(<ExperienceItem {...mockExperienceItem} isMd={true} />);

    const logoImage = screen.getByAltText(`${mockExperienceItem.company} Logo`);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", mockExperienceItem.logo);
    expect(logoImage).toHaveAttribute("width", "100");
    expect(logoImage).toHaveAttribute("height", "100");
  });

  it("renders logo image with correct src, alt text, and size when isMd is false", () => {
    render(<ExperienceItem {...mockExperienceItem} isMd={false} />);

    const logoImage = screen.getByAltText(`${mockExperienceItem.company} Logo`);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", mockExperienceItem.logo);
    expect(logoImage).toHaveAttribute("width", "70");
    expect(logoImage).toHaveAttribute("height", "70");
  });

  it("renders team when team was provided", () => {
    render(<ExperienceItem {...mockExperienceItem} isMd={false} />);
    expect(
      screen.getByText(`${mockExperienceItem.team} Team`),
    ).toBeInTheDocument();
  });

  it("does not render team when team was not provided", () => {
    render(<ExperienceItem {...mockExperienceItem} isMd={false} />);
    expect(
      screen.queryByText(`${mockExperienceItemWithoutTeam.team} Team`),
    ).not.toBeInTheDocument();
  });

  it("renders bullet points as a list", () => {
    render(<ExperienceItem {...mockExperienceItem} isMd={false} />);

    const bulletPoints = [
      mockExperienceItem.bullet1,
      mockExperienceItem.bullet2,
      mockExperienceItem.bullet3,
    ];
    bulletPoints.forEach((point) => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });
});
