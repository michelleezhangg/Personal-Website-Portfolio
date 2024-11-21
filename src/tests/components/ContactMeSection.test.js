import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactMeSection from "@/app/components/ContactMeSection";
import useMediaQuery from "@/hooks/useMediaQuery";
import { CONTACT } from "@/app/utils/constants";

// Mock fetch globally
global.fetch = jest.fn();
jest.mock("@/hooks/useMediaQuery");

describe("ContactMeSection Component", () => {
  beforeEach(() => {
    useMediaQuery.mockReturnValue(true); // Default to large screen size
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Contact Me section with the correct title", () => {
    render(<ContactMeSection />);
    const titleElement = screen.getByRole("heading", { name: /contact me/i });
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the form with the correct placeholders", () => {
    render(<ContactMeSection />);
    expect(
      screen.getByPlaceholderText(CONTACT.placeholders.first_name),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(CONTACT.placeholders.last_name),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(CONTACT.placeholders.email),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(CONTACT.placeholders.subject),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(CONTACT.placeholders.message),
    ).toBeInTheDocument();
  });

  it("submits the form and shows a success message", async () => {
    render(<ContactMeSection />);

    // Mock a successful API response
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 200 }),
      }),
    );

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a test message." },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    // Wait for the success message to appear
    await waitFor(() => {
      expect(
        screen.getByText(new RegExp(CONTACT.submission_responses.success, "i")),
      ).toBeInTheDocument();
    });

    // Check that the fetch was called with correct parameters
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        subject: "Hello",
        message: "This is a test message.",
      }),
    });
  });

  it("shows an error message if submission fails with an unexpected error", async () => {
    render(<ContactMeSection />);
    global.fetch.mockImplementationOnce(() => Promise.reject({}));

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a test message." },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(
        screen.getByText(/failed to send message\. please try again\./i),
      ).toBeInTheDocument();
    });
  });

  it("shows default error message if submission fails without specific error", async () => {
    render(<ContactMeSection />);
    global.fetch.mockImplementationOnce(() =>
      Promise.resolve({
        json: () => Promise.resolve({ status: 500 }),
      }),
    );

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a test message." },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(/failed to send message/i)).toBeInTheDocument();
    });
  });

  it("disables the submit button while loading", async () => {
    render(<ContactMeSection />);

    // Fill in form fields
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/subject/i), {
      target: { value: "Hello" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "This is a test message." },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    // Check if button is disabled
    await waitFor(() => {
      const button = screen.getByRole("button", { name: /sending.../i });
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent("Sending...");
    });
  });

  it("renders icons with correct sizes when isMd is true", async () => {
    useMediaQuery.mockReturnValue(true); // large screen size
    render(<ContactMeSection />);

    const linkedinIcon = screen.getByTestId("linkedin-icon");
    expect(linkedinIcon).toHaveAttribute("width", "30");
    expect(linkedinIcon).toHaveAttribute("height", "30");
  });

  it("renders icons with correct sizes when isMd is false", async () => {
    useMediaQuery.mockReturnValue(false); // smaller screens
    render(<ContactMeSection />);

    await waitFor(() => {
      const updatedLinkedinIcon = screen.getByTestId("linkedin-icon");
      expect(updatedLinkedinIcon).toHaveAttribute("width", "25");
      expect(updatedLinkedinIcon).toHaveAttribute("height", "25");
    });
  });
});
