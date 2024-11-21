import React from "react";
import { render, screen } from "@testing-library/react";
import EmailTemplate from "@/app/components/EmailTemplate";
import { CONTACT, PERSONAL } from "@/app/utils/constants";

jest.mock("@/app/utils/constants", () => ({
  CONTACT: {
    user_confirmation_email: {
      body: "Thank you for reaching out to us.",
      closing: "Thank you for your patience.",
      signoff: "Best regards,",
    },
  },
  PERSONAL: {
    name: "Michelle Zhang",
  },
}));

describe("EmailTemplate Component", () => {
  const mockProps = {
    firstName: "John",
    lastName: "Doe",
    subject: "Test Subject",
    message: "This is a test message",
  };

  beforeEach(() => {
    render(<EmailTemplate {...mockProps} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the greeting with the user's name", () => {
    expect(
      screen.getByText(`Hello ${mockProps.firstName} ${mockProps.lastName},`),
    ).toBeInTheDocument();
  });

  it("renders the confirmation email body from constants", () => {
    expect(
      screen.getByText(CONTACT.user_confirmation_email.body),
    ).toBeInTheDocument();
  });

  it("display the subject", () => {
    expect(
      screen.getByText(`Subject: ${mockProps.subject}`),
    ).toBeInTheDocument();
  });

  it("display the message", () => {
    expect(
      screen.getByText(`Message: ${mockProps.message}`),
    ).toBeInTheDocument();
  });

  it("renders the closing from constants", () => {
    expect(
      screen.getByText(CONTACT.user_confirmation_email.closing),
    ).toBeInTheDocument();
  });

  it("renders the sign off", () => {
    expect(
      screen.getByText(CONTACT.user_confirmation_email.signoff),
    ).toBeInTheDocument();
  });

  it("renders the personal name from constants", () => {
    expect(screen.getByText(PERSONAL.name)).toBeInTheDocument();
  });
});
