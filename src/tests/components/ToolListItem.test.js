import React from 'react';
import { render, screen } from '@testing-library/react';
import ToolListItem from '@/app/components/ToolListItem';

// Mock Image component
jest.mock('next/image', () => {
  return (props) => <img {...props} />;
});

const mockToolItem = {
  name: 'Tool Name',
  path: '/tool-icon.png',
};

describe('ToolListItem component', () => {
  beforeEach(() => {
    render(<ToolListItem {...mockToolItem} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders tool icon with correct src and alt text', () => {
    const iconImage = screen.getByAltText(`${mockToolItem.name} Icon`);
    expect(iconImage).toBeInTheDocument();
    expect(iconImage).toHaveAttribute('src', mockToolItem.path);
    expect(iconImage).toHaveAttribute('width', '40');
    expect(iconImage).toHaveAttribute('height', '40');
  });

  it('renders tool name correctly', () => {
    expect(screen.getByText(mockToolItem.name)).toBeInTheDocument();
  });
});
