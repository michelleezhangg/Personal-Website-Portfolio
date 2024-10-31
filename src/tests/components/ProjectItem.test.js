import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectItem from '@/app/components/ProjectItem';

const mockProjectItem = {
  title: 'Project Title',
  date: 'Jan 2024 - Jun 2024',
  location: 'Remote',
  links: [
    { url: 'https://example.com', link_name: 'Example Link 1' },
    { url: 'https://example2.com', link_name: 'Example Link 2' },
  ],
  bullet1: 'Bullet point 1',
  bullet2: 'Bullet point 2',
  bullet3: 'Bullet point 3',
};

describe('ProjectItem Component', () => {
  it('renders title, date, and location', () => {
    render(<ProjectItem {...mockProjectItem} />);

    expect(screen.getByText(mockProjectItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockProjectItem.date)).toBeInTheDocument();
    expect(screen.getByText(mockProjectItem.location)).toBeInTheDocument();
  });

  it('renders links with correct href attributes', () => {
    render(<ProjectItem {...mockProjectItem} />);

    mockProjectItem.links.forEach(link => {
      const linkButton = screen.getByText(link.link_name);
      expect(linkButton.closest('a')).toHaveAttribute('href', link.url);
    });
  });

  it('renders bullet points as a list', () => {
    render(<ProjectItem {...mockProjectItem} />);

    const bulletPoints = [mockProjectItem.bullet1, mockProjectItem.bullet2, mockProjectItem.bullet3];
    bulletPoints.forEach(point => {
      expect(screen.getByText(point)).toBeInTheDocument();
    });
  });

  it('renders no links if links array is empty', () => {
    const { container } = render(<ProjectItem {...mockProjectItem} links={[]} />);
    expect(container.querySelectorAll('a')).toHaveLength(0);
  });

  it('renders no bullet points if none are provided', () => {
    const mockNoBulletPoints = {
      title: 'Project Title',
      date: 'Jan 2024 - Jun 2024',
      location: 'Remote',
      links: [],
    };
    render(<ProjectItem {...mockNoBulletPoints}  />);
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});