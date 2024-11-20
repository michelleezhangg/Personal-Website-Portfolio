import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceItem from "@/app/components/ExperienceItem";
import { calculateDuration } from "@/app/utils/calculateDuration";

// Mock Image component
jest.mock("next/image", () => {
  const MockImage = (props) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

jest.mock("@/app/utils/calculateDuration", () => ({
  calculateDuration: jest.fn(),
}));

const mockExperienceItem = {
  company: "Test Company",
  position: "Test Position",
  location: "City, CA",
  type: "In Person",
  startMonth: "Jan",
  startYear: "2024",
  endMonth: "Jun",
  endYear: "2024",
  team: "Test Team",
  logo: "/test-logo.png",
  bullet1: "Bullet Point 1",
  bullet2: "Bullet Point 2",
  bullet3: "Bullet Point 3",
};

describe("ExperienceItem Component", () => {
  beforeEach(() => {
    calculateDuration.mockClear();
  });
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders company name, position, location, and date with endMonth and endYear", () => {
    const duration = calculateDuration.mockReturnValue({ years: 0, months: 6 });
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
        `${mockExperienceItem.startMonth} ${mockExperienceItem.startYear} - ${mockExperienceItem.endMonth} ${mockExperienceItem.endYear} (${duration})`,
      ),
    ).toBeInTheDocument();
  });

  it("renders current experience", () => {
    expect(
      screen.getByText(
        `${mockExperienceItem.startMonth} ${mockExperienceItem.startYear} - Present`,
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
