import { POST } from "@/app/api/send/route";
import { NextResponse } from 'next/server';

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

// Mock Resend
jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ id: 'some-id' }),
    },
  })),
}));

describe('POST function', () => {
  let mockRequest;
  let mockResendSend;

  beforeEach(() => {
    mockRequest = {
      json: jest.fn(),
    };
    NextResponse.json.mockClear();
    mockResendSend = jest.fn();
    jest.spyOn(require('resend'), 'Resend').mockImplementation(() => ({
      emails: {
        send: mockResendSend,
      },
    }));
  });

  it('should return 400 if email format is invalid', async () => {
    mockRequest.json.mockResolvedValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'invalid-email', // Invalid email format
      subject: 'Test Subject',
      message: 'Test Message',
    });

    await POST(mockRequest);
    expect(NextResponse.json).toHaveBeenCalledWith({
      error: 'Invalid email format',
      status: 400,
    });
  });

  it('should return 400 if required fields are missing', async () => {
    mockRequest.json.mockResolvedValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      // Missing subject and message
    });

    await POST(mockRequest);
    expect(NextResponse.json).toHaveBeenCalledWith({
      error: 'Missing required fields',
      status: 400,
    });
  });

  it('should return 500 if email sending fails', async () => {
    mockRequest.json.mockResolvedValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    });

    mockResendSend.mockRejectedValue(new Error('Email sending failed'));

    await POST(mockRequest);
    expect(NextResponse.json).toHaveBeenCalledWith({
      error: 'Internal server error',
      status: 500,
    });
  });

  it('should return 200 if email is sent successfully', async () => {
    mockRequest.json.mockResolvedValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    });

    mockResendSend.mockResolvedValue({ id: 'some-id' });

    await POST(mockRequest);
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: 'Email sent successfully',
      status: 200,
    });
  });
});
