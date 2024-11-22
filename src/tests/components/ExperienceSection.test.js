import React from "react";
import { render, screen } from "@testing-library/react";
import ExperienceSection from "@/app/components/ExperienceSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  PROFESSIONAL_EXPERIENCE,
  VOLUNTEER_AND_MENTORSHIP_EXPERIENCE,
} from "@/app/utils/constants";

jest.mock("@/hooks/useMediaQuery");

describe("ExperienceSection Component", () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true);
    render(<ExperienceSection />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Professional Experience section", () => {
    it("renders Professional Experience heading", () => {
      const professionalExperienceElement = screen.getByRole("heading", {
        name: /professional experience/i,
        level: 2,
      });
      expect(professionalExperienceElement).toBeInTheDocument();
    });

    it("renders all professional experience items", () => {
      PROFESSIONAL_EXPERIENCE.forEach((experience) => {
        // Just ensure company name is present, details are tested in ExperienceItem test file
        const experienceItems = screen.queryAllByText(experience.company);
        expect(experienceItems.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Volunteering and Mentorship section", () => {
    it("renders Volunteering and Mentorship heading", () => {
      const volunteeringAndMentorshipElement = screen.getByRole("heading", {
        name: /volunteering and mentorship/i,
        level: 2,
      });
      expect(volunteeringAndMentorshipElement).toBeInTheDocument();
    });

    it("renders all volunteering and mentorship items", () => {
      VOLUNTEER_AND_MENTORSHIP_EXPERIENCE.forEach((experience) => {
        // Just ensure position is present, details are tested in ExperienceItem test file
        const experienceItems = screen.queryAllByText(experience.position);
        expect(experienceItems.length).toBeGreaterThan(0);
      });
    });
  });
});
