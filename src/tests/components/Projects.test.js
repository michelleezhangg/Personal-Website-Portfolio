import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "@/app/components/Projects";
import { PROJECTS } from "@/app/utils/constants";

jest.mock("@/app/components/ProjectItem", () => {
  const MockProjectItem = ({ title, date, location }) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{`${date.startMonth} ${date.startYear} - ${date.endMonth} ${date.endYear}`}</p>
        <p>{location}</p>
      </div>
    );
  };

  MockProjectItem.propTypes = {
    title: require("prop-types").string,
    date: require("prop-types").shape({
      startMonth: require("prop-types").string,
      startYear: require("prop-types").string,
      endMonth: require("prop-types").string,
      endYear: require("prop-types").string,
    }).isRequired,
    location: require("prop-types").string,
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

      const locations = screen.getAllByText(project.location);
      expect(locations.length).toBeGreaterThan(0);
    });
  });
});
