import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/Footer';
import { COPYRIGHT, PERSONAL } from '@/app/constants';

describe('Footer', () => {
  // Test rendering
  it('renders Footer component with name, role, and copyright text', () => {
    render(<Footer />);
    
    // Check to see if name and role are rendered
    const nameElement = screen.getByText(PERSONAL.name);
    const roleElement = screen.getByText(PERSONAL.role);
    const copyrightElement = screen.getByText(COPYRIGHT);

    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
    expect(copyrightElement).toBeInTheDocument();
  });

  // Test link functionality
  it('renders link component around name and role', () => {
    render(<Footer />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });

  // Test layout and style
  it('positions name, role, and copyright text correctly', () => {
    render(<Footer />);

    const nameElement = screen.getByText(PERSONAL.name);
    const roleElement = screen.getByText(PERSONAL.role);
    const copyrightElement = screen.getByText(COPYRIGHT);

    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveClass('text-2xl', 'pl-5', 'pb-2');
    expect(roleElement).toHaveClass('text-sm', 'font-light', 'pl-5', 'uppercase');
    expect(copyrightElement).toHaveClass('ml-auto', 'mt-auto', 'mr-8');
  });

  it('applies correct layout and styling classes', () => {
    const { container } = render(<Footer />);
    const footer = container.firstChild;
  
    expect(footer).toHaveClass('bg-lightblue', 'py-3');
    expect(footer.firstChild).toHaveClass('flex', 'flex-row');
  });
});
