import React from "react";
import PropTypes from "props-types";
import { render, screen, fireEvent } from "@testing-library/react";
import MenuOverlay from "@/app/components/MenuOverlay";

// Mocking react-scroll library to isolate Navbar tests
jest.mock("react-scroll", () => {
  const MockLink = ({ activeClass, ...props }) => (
    <a {...props} data-testid="scroll-link" className={activeClass}>
      {props.children}
    </a>
  );

  MockLink.propTypes = {
    activeClass: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  return { Link: MockLink };
});

const mockLinks = [
  { title: "Title 1", path: "path1" },
  { title: "Title 2", path: "path2" },
  { title: "Title 3", path: "path3" },
  { title: "Title 4", path: "path4" },
];
const mockSetNavbarOpen = jest.fn();

describe("MenuOverlay Component", () => {
  beforeEach(() => {
    render(<MenuOverlay links={mockLinks} setNavbarOpen={mockSetNavbarOpen} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders MenuOverlay component with correct links", () => {
    mockLinks.forEach((link) => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });
  });

  it("renders the correct number of links", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(mockLinks.length);
  });

  it("link elements have correct attributes", () => {
    const scrollLinks = screen.getAllByTestId("scroll-link");
    scrollLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(mockLinks[index].title);
      expect(link).toHaveAttribute("to", mockLinks[index].path);
    });
  });

  it("sets setNavbarOpen to false when a link is clicked", () => {
    const scrollLinks = screen.getAllByTestId("scroll-link");
    expect(scrollLinks.length).toBe(mockLinks.length);

    fireEvent.click(scrollLinks[0]);
    expect(mockSetNavbarOpen).toHaveBeenCalledWith(false);
  });
});
