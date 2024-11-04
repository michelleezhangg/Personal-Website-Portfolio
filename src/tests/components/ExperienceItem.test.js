import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperienceItem from '@/app/components/ExperienceItem';

// Mock Image component
jest.mock('next/image', () => {
  return (props) => <img {...props} />;
});

const mockExperienceItem = {
  company: 'Test Company',
  position: 'Test Position',
  location: 'City, CA',
  date: 'Jan 2024 - Jun 2024',
  logo: '/test-logo.png',
  bullet1: 'Bullet Point 1',
  bullet2: 'Bullet Point 2',
  bullet3: 'Bullet Point 3',
};

describe('ExperienceItem Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders company name, position, location, and date', () => {
    render(<ExperienceItem {...mockExperienceItem} />);
    expect(screen.getByText(mockExperienceItem.company)).toBeInTheDocument();
    expect(screen.getByText(mockExperienceItem.position)).toBeInTheDocument();
    expect(screen.getByText(mockExperienceItem.location)).toBeInTheDocument();
    expect(screen.getByText(mockExperienceItem.date)).toBeInTheDocument();
  });

  it('renders logo image with correct src and alt text', () => {
    render(<ExperienceItem {...mockExperienceItem} />);

    const logoImage = screen.getByAltText(`${mockExperienceItem.company} Logo`);
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', mockExperienceItem.logo);
    expect(logoImage).toHaveAttribute('width', '100');
    expect(logoImage).toHaveAttribute('height', '100');
  });

  it('renders bullet points as a list', () => {
    render(<ExperienceItem {...mockExperienceItem} />);
    
    const bulletPoints = [mockExperienceItem.bullet1, mockExperienceItem.bullet2, mockExperienceItem.bullet3];
    bulletPoints.forEach(point => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  it('renders no bullet points if none are provided', () => {
    const mockNoBulletPoints = {
      company: 'Test Company',
      position: 'Test Position',
      location: 'City, CA',
      date: 'Jan 2024 - Jun 2024',
      logo: '/test-logo.png',
    };
    render(<ExperienceItem {...mockNoBulletPoints} />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
