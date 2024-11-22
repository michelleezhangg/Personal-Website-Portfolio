import React from "react";
import { render, screen } from "@testing-library/react";
import BackgroundSection from "@/app/components/BackgroundSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { EDUCATION, SKILLS, LANGUAGES, INTERESTS } from "@/app/utils/constants";

jest.mock("@/hooks/useMediaQuery");

describe("BackgroundSection Component", () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Section Heading", () => {
    it("renders the Background title", () => {
      render(<BackgroundSection />);
      const titleElement = screen.getByRole("heading", {
        name: /background/i,
        level: 1,
      });
      expect(titleElement).toBeInTheDocument();
    });

    it("renders the Resume button", () => {
      render(<BackgroundSection />);
      const resumeButton = screen.getByRole("link", { name: /resume/i });
      expect(resumeButton).toBeInTheDocument();
    });
  });

  describe("Education section", () => {
    it("renders university name, major, minor, scholarship, graduation date, and GPA", () => {
      render(<BackgroundSection />);

      expect(screen.getByText(EDUCATION.university)).toBeInTheDocument();
      expect(screen.getByText(EDUCATION.major)).toBeInTheDocument();
      expect(screen.getByText(EDUCATION.minor)).toBeInTheDocument();
      expect(screen.getByText(EDUCATION.scholarship)).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes(EDUCATION.graduation)),
      ).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes(EDUCATION.gpa)),
      ).toBeInTheDocument();
    });

    it("renders Chapman logo image with correct src and alt attributes", () => {
      render(<BackgroundSection />);

      const chapmanLogo = screen.getByAltText("Chapman Logo");
      expect(chapmanLogo).toBeInTheDocument();
      expect(chapmanLogo).toHaveAttribute(
        "src",
        expect.stringContaining("chapman-logo.png"),
      );
    });

    it("renders Chapman logo with the correct size when isMd is true", () => {
      useMediaQuery.mockReturnValue(true); // Larger screens
      render(<BackgroundSection />);

      const chapmanLogo = screen.getByAltText("Chapman Logo");
      expect(chapmanLogo).toHaveAttribute("width", "150");
      expect(chapmanLogo).toHaveAttribute("height", "150");
    });

    it("renders Chapman logo with the correct size when isMd is false", () => {
      useMediaQuery.mockReturnValue(false); // Smaller screens
      render(<BackgroundSection />);

      const chapmanLogo = screen.getByAltText("Chapman Logo");
      expect(chapmanLogo).toHaveAttribute("width", "75");
      expect(chapmanLogo).toHaveAttribute("height", "75");
    });

    it("renders Relevant Coursework and Organizations", () => {
      render(<BackgroundSection />);
      expect(screen.getByText("Relevant Coursework")).toBeInTheDocument();

      EDUCATION.relevant_coursework.forEach((course) => {
        // Ensure at least one match, duplicates are fine
        const courses = screen.queryAllByText(course);
        expect(courses.length).toBeGreaterThan(0);
      });
    });

    it("renders Organizations", () => {
      render(<BackgroundSection />);
      expect(screen.getByText("Organizations")).toBeInTheDocument();

      EDUCATION.organizations.forEach((organization) => {
        // Ensure at least one match, duplicates are fine
        const organizations = screen.queryAllByText(organization);
        expect(organizations.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Skills section", () => {
    it("renders Skills heading", () => {
      render(<BackgroundSection />);

      const skillsElement = screen.getByRole("heading", {
        name: /skills/i,
        level: 2,
      });
      expect(skillsElement).toBeInTheDocument();
    });

    describe("Programming Language section", () => {
      it("renders Programming Languages heading", () => {
        render(<BackgroundSection />);

        const programmingLanguagesElement = screen.getByRole("heading", {
          name: /programming languages/i,
          level: 3,
        });
        expect(programmingLanguagesElement).toBeInTheDocument();
      });

      it("renders all proficient languages", () => {
        render(<BackgroundSection />);

        expect(screen.getByText("Proficient")).toBeInTheDocument();
        SKILLS.programming_languages.proficient.forEach((language) => {
          expect(screen.getByText(language.name)).toBeInTheDocument();
        });
      });

      it("renders all familiar languages", () => {
        render(<BackgroundSection />);

        expect(screen.getByText("Familiar")).toBeInTheDocument();
        SKILLS.programming_languages.familiar.forEach((language) => {
          expect(screen.getByText(language.name)).toBeInTheDocument();
        });
      });
    });

    describe("Frameworks and Libraries section", () => {
      it("renders Frameworks and Libraries heading", () => {
        render(<BackgroundSection />);

        const frameworksElement = screen.getByRole("heading", {
          name: /frameworks and libraries/i,
          level: 3,
        });
        expect(frameworksElement).toBeInTheDocument();
      });

      it("renders all frameworks and libraries", () => {
        render(<BackgroundSection />);

        SKILLS.frameworksAndLibraries.forEach((framework) => {
          expect(screen.getByText(framework.name)).toBeInTheDocument();
        });
      });
    });

    describe("Tools and Technical Skills section", () => {
      it("renders Tools and Technical Skills heading", () => {
        render(<BackgroundSection />);

        const technicalSkillsElement = screen.getByRole("heading", {
          name: /tools and technical skills/i,
          level: 3,
        });
        expect(technicalSkillsElement).toBeInTheDocument();
      });

      it("renders all tools and technical skills", () => {
        render(<BackgroundSection />);

        SKILLS.technical_skills.forEach((skill) => {
          expect(screen.getByText(skill.name)).toBeInTheDocument();
        });
      });
    });
  });

  describe("About Me section", () => {
    it("renders Languages heading and all language items", () => {
      render(<BackgroundSection />);

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
      render(<BackgroundSection />);

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
