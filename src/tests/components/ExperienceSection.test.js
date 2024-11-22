import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceSection from "@/app/components/ExperienceSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { PROFESSIONAL_EXPERIENCE } from "@/app/utils/constants";

jest.mock("@/hooks/useMediaQuery");

describe("ExperienceSection Component", () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Professional Experience section", () => {
    it("renders Professional Experience heading", () => {
      render(<ExperienceSection />);

      const professionalExperienceElement = screen.getByRole("heading", {
        name: /professional experience/i,
        level: 2,
      });
      expect(professionalExperienceElement).toBeInTheDocument();
    });

    it("renders all professional experience items", () => {
      render(<ExperienceSection />);

      PROFESSIONAL_EXPERIENCE.forEach((experience) => {
        // Just ensure company name is present, details are tested in ExperienceItem test file
        const experienceItems = screen.queryAllByText(experience.company);
        expect(experienceItems.length).toBeGreaterThan(0);
      });
    });
  });
});
