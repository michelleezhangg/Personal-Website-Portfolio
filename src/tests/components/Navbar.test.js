import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "@/app/components/Navbar";
import { NAV_LINKS, PERSONAL } from "@/app/utils/constants";

// Mock react-scroll library to isolate Navbar tests
jest.mock("react-scroll", () => {
  const MockLink = ({ activeClass, onSetActive, to, ...props }) => (
    <a
      {...props}
      data-testid="scroll-link"
      className={activeClass}
      to={to}
      onClick={() => {
        if (onSetActive) {
          onSetActive(to); // Simulate onSetActive callback
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

// Mock NAV_LINKS constant
jest.mock("@/app/utils/constants", () => ({
  NAV_LINKS: [
    {
      title: "Link One",
      path: "/link-one",
    },
    {
      title: "Link Two",
      path: "/link-two",
      dropdown: [
        {
          title: "Dropdown One",
          path: "/dropdown-one",
        },
        {
          title: "Dropdown Two",
          path: "/dropdown-two",
        },
        {
          title: "Dropdown Three",
          path: "/dropdown-three",
        },
      ],
    },
    {
      title: "Link Three",
      path: "/link-three",
      dropdown: [
        {
          title: "Dropdown One",
          path: "/dropdown-one",
        },
        {
          title: "Dropdown Two",
          path: "/dropdown-two",
        },
      ],
    },
    {
      title: "Link Four",
      path: "/link-four",
    },
    {
      title: "Link Five",
      path: "/link-five",
    },
  ],

  PERSONAL: {
    name: "First Last",
    role: "Software Engineer",
  },
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
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

  it("renders navigation links", () => {
    NAV_LINKS.forEach((link, index) => {
      expect(screen.getByTestId(`navlink-${index}`)).toBeInTheDocument();
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });
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

  it("renders the dropdown menu when hoveredDropdown matches the index", () => {
    const dropDownLinks = NAV_LINKS.filter((link) => link.dropdown);

    if (dropDownLinks.length > 0) {
      const dropDownParent = screen.getByText(dropDownLinks[0].title);
      fireEvent.mouseEnter(dropDownParent); // Simulate hovering over the link

      const dropDownMenu = screen.getByRole("list");
      expect(dropDownMenu).toBeInTheDocument();
    }
  });

  it("closes dropdown menu when mouse leaves navlink", async () => {
    const dropDownLinkIndex = 1;
    const dropDownLink = screen.getByTestId(`navlink-${dropDownLinkIndex}`);
    userEvent.hover(dropDownLink); // Simulate hovering over the link

    const dropDownMenu = await screen.findByTestId(
      `dropdown-menu-${dropDownLinkIndex}`,
    );
    expect(dropDownMenu).toBeInTheDocument();

    userEvent.unhover(dropDownLink);
    await waitFor(() => {
      expect(
        screen.queryByTestId(`dropdown-menu-${dropDownLinkIndex}`),
      ).toBeInTheDocument();
    });
  });

  it("displays correct dropdown contents when navlink with dropdown is hovered", async () => {
    const dropDownNavLink = screen.getByText("Link Two");
    fireEvent.mouseEnter(dropDownNavLink);
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(screen.getByText("Dropdown One")).toBeInTheDocument();
    expect(screen.getByText("Dropdown Two")).toBeInTheDocument();
  });
});
