import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '@/app/components/HeroSection';
import { PERSONAL, SOCIAL_LINKS } from '@/app/constants';

describe('HeroSection Component', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the profile image with correct src and alt', () => {
    const profileImage = screen.getByAltText('Profile Image');
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute('src', expect.stringContaining('profile.png'));
    expect(profileImage).toHaveAttribute('width', '200');
    expect(profileImage).toHaveAttribute('height', '200');
  });

  it('displays the name and role', () => {
    const nameElement = screen.getByRole('heading', { name: new RegExp(PERSONAL.name), level: 1 });
    expect(nameElement).toBeInTheDocument();
    const roleElement = screen.getByRole('heading', { name: new RegExp(PERSONAL.role), level: 3 });
    expect(roleElement).toBeInTheDocument();
  });

  it('displays the phone number and email', () => {
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.getByText(PERSONAL.phone_number)).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText(PERSONAL.email)).toBeInTheDocument();
  });

  it('displays personal intro and background', () => {
    // Checks for first line instead of entire multi-lined constant
    const firstLineIntro = PERSONAL.intro.split('\n')[0].trim();
    const firstLineBackground = PERSONAL.background.split('\n')[0].trim();
    expect(screen.getByText(new RegExp(firstLineIntro))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(firstLineBackground))).toBeInTheDocument();
  });

  it('renders LinkedIn, GitHub, and Instagram icons with correct links', () => {
    const linkedInLink = screen.getByAltText('LinkedIn Icon');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink.closest('a')).toHaveAttribute('href', SOCIAL_LINKS.linkedin);

    const githubLink = screen.getByAltText('GitHub Icon');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest('a')).toHaveAttribute('href', SOCIAL_LINKS.github);

    const instagramLink = screen.getByAltText('Instagram Icon');
    expect(instagramLink).toBeInTheDocument();
    expect(instagramLink.closest('a')).toHaveAttribute('href', SOCIAL_LINKS.instagram);
  });

  it('renders Resume and Projects buttons with correct links', () => {
    const resumeButton = screen.getByRole('button', { name: /resume/i });
    expect(resumeButton).toBeInTheDocument();
    
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    expect(resumeLink).toHaveAttribute('href', '/assets/resume.pdf');

    const projectsButton = screen.getByRole('button', { name: /projects/i });
    expect(projectsButton).toBeInTheDocument();

    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toHaveAttribute('href', '#projects');
  });
});
