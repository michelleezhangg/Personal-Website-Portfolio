import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactMeSection from '@/app/components/ContactMeSection';
import { CONTACT } from '@/app/constants';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ status: 200 }),
  })
);

describe('ContactMeSection Component', () => {
  beforeEach(() => {
    render(<ContactMeSection />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Contact Me section with the correct title', () => {
    const titleElement = screen.getByRole('heading', { name: /contact me/i });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the form with the correct placeholders', () => {
    expect(screen.getByPlaceholderText(CONTACT.placeholders.first_name)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(CONTACT.placeholders.last_name)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(CONTACT.placeholders.email)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(CONTACT.placeholders.subject)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(CONTACT.placeholders.message)).toBeInTheDocument();
  });

  it('submits the form and shows a success message', async () => {
    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' }});
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' }});
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' }});
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' }});
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message.' }});

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for the success message to appear
    await waitFor(() => {
      expect(screen.getByText(new RegExp(CONTACT.submission_responses.success, 'i'))).toBeInTheDocument();
    });

    // Check that the fetch was called with correct parameters
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        subject: 'Hello',
        message: 'This is a test message.',
      }),
    });
  });

  it('shows an error message if submission fails', async () => {
    // Mock failed fetch call
    fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 500, error: 'Submission failed' }),
      })
    );

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' }});
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' }});
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' }});
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' }});
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message.' }});

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(new RegExp(/submission failed/i))).toBeInTheDocument();
    });
  });

  it('disables the submit button while loading', async () => {
    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' }});
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' }});
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' }});
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Hello' }});
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'This is a test message.' }});

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check if button is disabled
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /sending.../i });
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent('Sending...');
    });
  });
});