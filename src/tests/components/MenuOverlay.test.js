import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuOverlay from '@/app/components/MenuOverlay';

jest.mock('react-scroll', () => ({
  Link: (props) => <a {...props} data-testid='scroll-link'>{props.children}</a>,
}));

const mockLinks = [
  { title: 'Title 1', path: 'path1' },
  { title: 'Title 2', path: 'path2' },
  { title: 'Title 3', path: 'path3' },
  { title: 'Title 4', path: 'path4' },
];

describe('MenuOverlay Component', () => {
  beforeEach(() => {
    render(<MenuOverlay links={mockLinks} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders MenuOverlay component with correct links', () => {
    mockLinks.forEach(link => {
      expect(screen.getByText(link.title)).toBeInTheDocument();
    });
  });

  it('renders the correct number of links', () => {
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockLinks.length);
  });

  it('link elements have correct attributes', () => {
    const scrollLinks = screen.getAllByTestId('scroll-link');
    scrollLinks.forEach((link, index) => {
      expect(link).toHaveTextContent(mockLinks[index].title);
      expect(link).toHaveAttribute('to', mockLinks[index].path);
    });
  });
});
