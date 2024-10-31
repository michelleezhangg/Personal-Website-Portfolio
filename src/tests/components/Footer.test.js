import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/Footer';
import { COPYRIGHT, PERSONAL } from '@/app/constants';

describe('Footer Component', () => {
  it('renders Footer component with name, role, and copyright text', () => {
    render(<Footer />);
    
    const nameElement = screen.getByText(PERSONAL.name);
    const roleElement = screen.getByText(PERSONAL.role);
    const copyrightElement = screen.getByText(COPYRIGHT);

    expect(nameElement).toBeInTheDocument();
    expect(roleElement).toBeInTheDocument();
    expect(copyrightElement).toBeInTheDocument();
  });

  it('renders link component around name and role', () => {
    render(<Footer />);

    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#');
  });
});
