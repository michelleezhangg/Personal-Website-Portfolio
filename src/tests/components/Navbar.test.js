import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";
import { NAV_LINKS, PERSONAL } from "@/app/constants";

// Mocking react-scroll library to isolate Navbar tests
jest.mock("react-scroll", () => {
  const MockLink = ({ activeClass, onSetActive, to, ...props }) => (
    <a
      {...props}
      data-testid="scroll-link"
      className={activeClass}
      to={to}
      onClick={() => {
        if (onSetActive) {
          onSetActive(to); // simulate onSetActive callback
        }
      }}
    >
      {props.children}
    </a>
  );

  MockLink.propTypes = {
    activeClass: require("prop-types").string,
    onSetActive: require("prop-types").func,
    to: require("prop-types").string,
    children: require("prop-types").node,
  };

  MockLink.displayName = "MockLink";

  return {
    Link: MockLink,
    animateScroll: { scrollToTop: jest.fn() },
  };
});

// Mock MenuOverlay component
jest.mock("@/app/components/MenuOverlay", () => {
  const MockMenuOverlay = ({ links }) => (
    <ul data-testid="menu-overlay">
      {links.map((link, index) => (
        <li key={index}>{link.title}</li>
      ))}
    </ul>
  );

  MockMenuOverlay.propTypes = {
    links: require("prop-types").arrayOf(
      require("prop-types").shape({
        title: require("prop-types").string.isRequired,
        path: require("prop-types").string.isRequired,
      }),
    ).isRequired,
  };

  MockMenuOverlay.displayName = "MenuOverlay";

  return MockMenuOverlay;
});

describe("Navbar Component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Navbar component with the title and role", () => {
    const nameElement = screen.getByText(PERSONAL.name);
    const roleElement = screen.getByText(PERSONAL.role);

    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
  });

  it("renders the mobile menu button", () => {
    const mobileMenuButton = screen.getByLabelText("Open mobile menu");
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it("opens the mobile menu when button is clicked", () => {
    const mobileMenuButton = screen.getByLabelText("Open mobile menu");

    // Click to open the mobile menu
    fireEvent.click(mobileMenuButton);

    // Check if close button is present after clicking
    const closeButton = screen.getByLabelText("Close mobile menu");
    expect(closeButton).toBeInTheDocument();

    // Check if MenuOverlay is rendered
    const menuOverlay = screen.getByTestId("menu-overlay");
    expect(menuOverlay).toBeInTheDocument();
  });

  it("renders the correct number of links in the navbar in desktop view", () => {
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(NAV_LINKS.length);
  });

  it("link elements have correct attributes", () => {
    const scrollLinks = screen.getAllByTestId("scroll-link");
    scrollLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(NAV_LINKS[index].title);
      expect(link).toHaveAttribute("to", NAV_LINKS[index].path);
    });
  });

  it("closes mobile menu when close button is clicked", () => {
    // Open the mobile menu
    const mobileMenuButton = screen.getByLabelText("Open mobile menu");
    fireEvent.click(mobileMenuButton);

    // Check if close button is present after clicking
    const closeButton = screen.getByLabelText("Close mobile menu");
    expect(closeButton).toBeInTheDocument();

    // Close the mobile menu
    fireEvent.click(closeButton);

    // Check if close button is no longer in the document
    expect(
      screen.queryByLabelText("Close mobile menu"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("menu-overlay")).not.toBeInTheDocument();
  });

  it("scrolls to the top when logo is clicked", () => {
    const logoLink = screen.getByText(PERSONAL.name);
    fireEvent.click(logoLink);

    // Check if scrollToTop function is called
    const { animateScroll } = require("react-scroll");
    expect(animateScroll.scrollToTop).toHaveBeenCalled();
  });

  it("sets the active link when onSetActive is triggered", () => {
    const scrollLinks = screen.getAllByTestId("scroll-link");
    const secondLink = scrollLinks[1];
    fireEvent.click(secondLink);

    // Check if second link has active highlighting
    expect(secondLink).toHaveClass("text-darkblue");
  });
});
