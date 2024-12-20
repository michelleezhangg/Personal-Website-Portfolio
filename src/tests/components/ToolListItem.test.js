import React from "react";
import { render, screen } from "@testing-library/react";
import ToolListItem from "@/app/components/ToolListItem";

// Mock Image component
jest.mock("next/image", () => {
  const MockImage = (props) => <img {...props} />;
  MockImage.displayName = "MockImage";
  return MockImage;
});

const mockToolItem = {
  name: "Tool Name",
  path: "/tool-icon.png",
};

describe("ToolListItem component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders tool icon with correct src, alt text, and size when isMd is true", () => {
    render(<ToolListItem {...mockToolItem} isMd={true} />);

    const iconImage = screen.getByAltText(`${mockToolItem.name} Icon`);
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute("src", mockToolItem.path);
    expect(iconImage).toHaveAttribute("width", "40");
    expect(iconImage).toHaveAttribute("height", "40");
  });

  it("renders tool icon with correct src and alt text, and size when isMd is false", () => {
    render(<ToolListItem {...mockToolItem} isMd={false} />);

    const iconImage = screen.getByAltText(`${mockToolItem.name} Icon`);
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute("src", mockToolItem.path);
    expect(iconImage).toHaveAttribute("width", "30");
    expect(iconImage).toHaveAttribute("height", "30");
  });

  it("renders tool name correctly", () => {
    render(<ToolListItem {...mockToolItem} isMd={true} />);
    expect(screen.getByText(mockToolItem.name)).toBeInTheDocument();
  });
});
