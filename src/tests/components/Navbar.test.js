import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "@/app/components/Navbar";
import { PERSONAL, NAV_LINKS } from "@/app/utils/constants";
import { Link as ScrollLink, animateScroll } from "react-scroll";

// Mock react-scroll to simulate behavior
jest.mock("react-scroll", () => ({
  ...jest.requireActual("react-scroll"),
  Link: jest.fn(({ to, onSetActive, children, ...props }) => (
    <a href={`#${to}`} onClick={() => onSetActive && onSetActive()} {...props}>
      {children}
    </a>
  )),
  animateScroll: { scrollToTop: jest.fn() },
}));

// Mock MenuOverlay component
jest.mock("@/app/components/MenuOverlay", () =>
  jest.fn(({ links, setNavbarOpen }) => (
    <div data-testid="menu-overlay">
      <button onClick={() => setNavbarOpen(false)}>Close Menu</button>
      {links.map((link, index) => (
        <a key={index} href={`#${link.path}`}>
          {link.title}
        </a>
      ))}
    </div>
  )),
);

describe("Navbar Component", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the navbar with personal details", () => {
    expect(screen.getByText(PERSONAL.name)).toBeInTheDocument();
    expect(screen.getByText(PERSONAL.role)).toBeInTheDocument();
  });

  it("toggles the mobile menu", () => {
    const openButton = screen.getByLabelText("Open mobile menu");
    fireEvent.click(openButton);

    const menuOverlay = screen.getByTestId("menu-overlay");
    expect(menuOverlay).toBeInTheDocument();

    NAV_LINKS.forEach((link) => {
      expect(screen.queryAllByText(link.title)[0]).toBeInTheDocument();
    });

    const closeButton = screen.getByText("Close Menu");
    fireEvent.click(closeButton);
    expect(screen.queryByTestId("menu-overlay")).not.toBeInTheDocument();
  });

  it("sets the active link on click", async () => {
    const navLink = screen.getByText(NAV_LINKS[0].title);
    fireEvent.click(navLink);
    expect(ScrollLink).toHaveBeenCalledWith(
      expect.objectContaining({
        to: NAV_LINKS[0].path,
      }),
      expect.anything(),
    );
  });

  it("sets the active link and clears hovered dropdown when a dropdown link is clicked", async () => {
    const mainLink = screen.getByText(NAV_LINKS[1].title);
    fireEvent.mouseEnter(mainLink);

    const dropDownLink = await screen.findByText(
      NAV_LINKS[1].dropdown[0].title,
    );
    fireEvent.click(dropDownLink);
    expect(ScrollLink).toHaveBeenCalledWith(
      expect.objectContaining({
        to: NAV_LINKS[1].path,
      }),
      expect.anything(),
    );
    await waitFor(() => {
      expect(
        screen.queryByText(NAV_LINKS[1].dropdown[0].title),
      ).not.toBeInTheDocument();
    });
  });

  it("sets hoveredDropdown correctly when mouse enters and leaves a dropdown link", () => {
    const dropDownIndex = NAV_LINKS.findIndex((link) => link.dropdown);
    const dropDownLink = screen.getByTestId(`navlink-${dropDownIndex}`);
    fireEvent.mouseEnter(dropDownLink);

    setTimeout(() => {
      const dropDownMenu = screen.getByTestId(`dropdown-menu-${dropDownIndex}`);
      expect(dropDownMenu).toBeInTheDocument();
    }, 300);
    fireEvent.mouseLeave(dropDownLink);

    const dropDownMenu = screen.queryByTestId(`dropdown-menu-${dropDownIndex}`);
    expect(dropDownMenu).not.toBeInTheDocument();
  });

  it("scrolls to the top when navbar name or role is clicked", () => {
    const nameElement = screen.getByText(PERSONAL.name);
    fireEvent.click(nameElement);
    expect(animateScroll.scrollToTop).toHaveBeenCalledTimes(1);

    const roleElement = screen.getByText(PERSONAL.role);
    fireEvent.click(roleElement);
    expect(animateScroll.scrollToTop).toHaveBeenCalledTimes(2);
  });

  it("toggles navbarOpen state when the menu buttons are clicked", () => {
    const openButton = screen.getByRole("button", { name: "Open mobile menu" });
    fireEvent.click(openButton);

    const closeButton = screen.getByRole("button", {
      name: "Close mobile menu",
    });
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);

    expect(openButton).toBeInTheDocument();
  });
});
