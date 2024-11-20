import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceItem from "@/app/components/ExperienceItem";
import { displayDuration } from "@/app/utils/duration";
import { displayDate } from "@/app/utils/displayDate";

// Mock Image component
jest.mock("next/image", () => {
  const MockImage = (props) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

jest.mock("@/app/utils/duration", () => ({
  displayDuration: jest.fn(),
}));

jest.mock("@/app/utils/displayDate", () => ({
  displayDate: jest.fn(),
}));

const mockExperienceItem = {
  company: "Test Company",
  position: "Test Position",
  location: "City, CA",
  type: "In Person",
  date: {
    startMonth: "Jan",
    startYear: "2023",
    endMonth: "Jun",
    endYear: "2024",
  },
  team: "Team Name",
  logo: "/test-logo.png",
  bullet1: "Bullet Point 1",
  bullet2: "Bullet Point 2",
  bullet3: "Bullet Point 3",
};

const mockExperienceItemPresent = {
  company: "Test Company",
  position: "Test Position",
  location: "City, CA",
  type: "In Person",
  date: {
    startMonth: "Jan",
    startYear: "2023",
  },
  team: "Team Name",
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
  date: {
    startMonth: "Jan",
    startYear: "2023",
  },
  logo: "/test-logo.png",
  bullet1: "Bullet Point 1",
  bullet2: "Bullet Point 2",
  bullet3: "Bullet Point 3",
};

describe("ExperienceItem Component", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2024-11-19"));
  });

  afterEach(() => {
    displayDuration.mockClear();
    jest.clearAllMocks();
  });

  it("renders company name, position, location, and date with endMonth and endYear", () => {
    displayDate.mockReturnValue("Jan 2023 - Jun 2024");
    displayDuration.mockReturnValue("1 year, 6 months");
    render(<ExperienceItem {...mockExperienceItem} isMd={false} />);

    expect(screen.getByText(mockExperienceItem.company)).toBeInTheDocument();
    expect(screen.getByText(mockExperienceItem.position)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${mockExperienceItem.location} (${mockExperienceItem.type})`,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Jan 2023 - Jun 2024 (1 year, 6 months)"),
    ).toBeInTheDocument();
  });

  it("renders date with no endMonth and endYear (Present)", () => {
    displayDate.mockReturnValue("Jan 2023 - Present");
    displayDuration.mockReturnValue("1 year, 11 months");
    render(<ExperienceItem {...mockExperienceItemPresent} isMd={false} />);

    expect(
      screen.getByText("Jan 2023 - Present (1 year, 11 months)"),
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
    render(<ExperienceItem {...mockExperienceItemWithoutTeam} isMd={false} />);
    expect(screen.queryByText("Team Name Team")).not.toBeInTheDocument();
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
