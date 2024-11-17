import React from "react";
import { render, screen } from "@testing-library/react";
import AboutMeSection from "@/app/components/AboutMeSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  EDUCATION,
  PROFESSIONAL_EXPERIENCE,
  LANGUAGES,
  INTERESTS,
} from "@/app/constants";

jest.mock("@/hooks/useMediaQuery");

describe("AboutMeSection Component", () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Section Heading", () => {
    it("renders the About Me title", () => {
        render(<AboutMeSection />);
        const titleElement = screen.getByRole("heading", {
          name: /about me/i,
          level: 1,
        });
        expect(titleElement).toBeInTheDocument();
      });

      it("renders the Resume button", () => {
        render(<AboutMeSection />);
        const resumeButton = screen.getByRole("button", { name: /resume/i });
        expect(resumeButton).toBeInTheDocument();
      });
  });

  describe("Education section", () => {
    it("renders university name, major, minor, scholarship, graduation date, and GPA", () => {
      render(<AboutMeSection />);

      expect(screen.getByText(EDUCATION.university)).toBeInTheDocument();
      expect(screen.getByText(EDUCATION.major)).toBeInTheDocument();
      expect(screen.getByText(EDUCATION.minor)).toBeInTheDocument();
      expect(screen.getByText(EDUCATION.scholarship)).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes(EDUCATION.graduation))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes(EDUCATION.gpa))).toBeInTheDocument();
    });

    it("renders Chapman logo image with correct src and alt attributes", () => {
      render(<AboutMeSection />);

      const chapmanLogo = screen.getByAltText("Chapman Logo");
      expect(chapmanLogo).toBeInTheDocument();
      expect(chapmanLogo).toHaveAttribute(
        "src",
        expect.stringContaining("chapman-logo.png"),
      );
      expect(chapmanLogo).toHaveAttribute("width", "250");
      expect(chapmanLogo).toHaveAttribute("height", "250");
    });

    it("renders Chapman logo with the correct size when isMd is true", () => {
      useMediaQuery.mockReturnValue(true); // Larger screens
      render(<AboutMeSection />);

      const chapmanLogo = screen.getByAltText("Chapman Logo");
      expect(chapmanLogo).toHaveAttribute("width", "250");
      expect(chapmanLogo).toHaveAttribute("height", "250");
    });

    it("renders Chapman logo with the correct size when isMd is false", () => {
      useMediaQuery.mockReturnValue(false); // Smaller screens
      render(<AboutMeSection />);

      const chapmanLogo = screen.getByAltText("Chapman Logo");
      expect(chapmanLogo).toHaveAttribute("width", "150");
      expect(chapmanLogo).toHaveAttribute("height", "150");
    });

    it("renders Relevant Coursework and Organizations", () => {
      render(<AboutMeSection />);
      expect(screen.getByText("Relevant Coursework")).toBeInTheDocument();

      EDUCATION.relevant_coursework.forEach((course) => {
        // Ensure at least one match, duplicates are fine
        const courses = screen.queryAllByText(course);
        expect(courses.length).toBeGreaterThan(0);
      });
    });

    it("renders Organizations", () => {
      render(<AboutMeSection />);
      expect(screen.getByText("Organizations")).toBeInTheDocument();

      EDUCATION.organizations.forEach((organization) => {
        // Ensure at least one match, duplicates are fine
        const organizations = screen.queryAllByText(organization);
        expect(organizations.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Programming Language section", () => {
    it("renders Programming Languages heading", () => {
      render(<AboutMeSection />);

      const programmingLanguagesElement = screen.getByRole("heading", {
        name: /programming languages/i,
        level: 3,
      });
      expect(programmingLanguagesElement).toBeInTheDocument();
    });

    it("renders all proficient languages", () => {
      render(<AboutMeSection />);

      expect(screen.getByText("Proficient")).toBeInTheDocument();
      EDUCATION.programming_languages.proficient.forEach((language) => {
        expect(screen.getByText(language.name)).toBeInTheDocument();
      });
    });

    it("renders all familiar languages", () => {
      render(<AboutMeSection />);

      expect(screen.getByText("Familiar")).toBeInTheDocument();
      EDUCATION.programming_languages.familiar.forEach((language) => {
        expect(screen.getByText(language.name)).toBeInTheDocument();
      });
    });
  });

  describe("Technical Skills section", () => {
    it("renders Technical Skills heading", () => {
      render(<AboutMeSection />);

      const technicalSkillsElement = screen.getByRole("heading", {
        name: /technical skills/i,
        level: 3,
      });
      expect(technicalSkillsElement).toBeInTheDocument();
    });

    it("renders all technical skills", () => {
      render(<AboutMeSection />);

      EDUCATION.technical_skills.forEach((skill) => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });
    });
  });

  describe("Professional Experience section", () => {
    it("renders Professional Experience heading", () => {
      render(<AboutMeSection />);

      const professionalExperienceElement = screen.getByRole("heading", {
        name: /professional experience/i,
        level: 2,
      });
      expect(professionalExperienceElement).toBeInTheDocument();
    });

    it("renders all experience items", () => {
      render(<AboutMeSection />);

      PROFESSIONAL_EXPERIENCE.forEach((experience) => {
        // Just ensure company name is present, details are tested in ExperienceItem test file
        const experienceItems = screen.queryAllByText(experience.company);
        expect(experienceItems.length).toBeGreaterThan(0);
      });
    });
  });

  describe("About Me section", () => {
    it("renders Languages heading and all language items", () => {
      render(<AboutMeSection />);
      
      const languagesSectionElement = screen
        .getByText("Languages")
        .closest(".section-box");
      expect(languagesSectionElement).toBeInTheDocument();

      LANGUAGES.forEach((language) => {
        expect(
          screen.getByText(`${language.language} (${language.fluency})`),
        ).toBeInTheDocument();
      });
    });

    it("renders Interest heading and all interest items", () => {
      render(<AboutMeSection />);

      const interestSectionElement = screen
        .getByText("Interests")
        .closest(".section-box");
      expect(interestSectionElement).toBeInTheDocument();
      INTERESTS.forEach((interest) => {
        expect(screen.getByText(interest)).toBeInTheDocument();
      });
    });
  });
});
