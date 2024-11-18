import React from "react";
import { render } from "@testing-library/react";
import SkeletonLoader from "@/app/components/SkeletonLoader";

describe("SkeletonLoader", () => {
  it("has the animate-pulse class", () => {
    const { container } = render(<SkeletonLoader />);
    expect(container.firstChild).toHaveClass("animate-pulse");
  });
});
