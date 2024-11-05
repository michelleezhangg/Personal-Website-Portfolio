import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/components/Projects";
import { PROJECTS } from "@/app/constants";
import { PropTypes } from "prop-types";

jest.mock("@/app/components/ProjectItem", () => {
  const MockProjectItem = ({ title, date, location }) => (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{location}</p>
    </div>
  );

  MockProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };

  MockProjectItem.displayName = "MockProjectItem";

  return MockProjectItem;
});

describe("Projects Component", () => {
  beforeEach(() => {
    render(<Projects />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Projects component with the correct title", () => {
    const titleElement = screen.getByText("Projects");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the GitHub and LinkedIn buttons", () => {
    const gitHubButton = screen.getByRole("button", { name: /github/i });
    const linkedInButton = screen.getByRole("button", { name: /linkedin/i });

    expect(gitHubButton).toBeInTheDocument();
    expect(linkedInButton).toBeInTheDocument();
  });

  it("renders the correct number of ProjectItem Components", () => {
    const projectItems = screen.getAllByRole("heading", { level: 2 });
    expect(projectItems).toHaveLength(PROJECTS.length);
  });

  it("renders each project with correct details", () => {
    PROJECTS.forEach((project) => {
      // Ensure at least one match, duplicates are fine
      const titles = screen.getAllByText(project.title);
      expect(titles.length).toBeGreaterThan(0);

      const dates = screen.getAllByText(project.date);
      expect(dates.length).toBeGreaterThan(0);

      const locations = screen.getAllByText(project.location);
      expect(locations.length).toBeGreaterThan(0);
    });
  });
});
