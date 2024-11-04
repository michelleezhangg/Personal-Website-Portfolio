import { POST } from '@/app/api/send/route';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Mock external dependencies
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn().mockImplementation((body, options) => ({ body, options })),
  },
}));

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ error: null }),
    },
  })),
}));

describe('POST function', () => {
  let mockReq;

  beforeEach(() => {
    mockReq = {
      json: jest.fn().mockResolvedValue({
        email: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test Message',
      }),
    };
    process.env.RESEND_API_KEY = 'test_api_key';
    process.env.ADMIN_EMAIL = 'admin@example.com';
    process.env.PROFESSIONAL_EMAIL = 'me@example.com';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  /* Test for successfuly email sent */
  it('should return 200 if email is sent successfully', async () => {
    mockReq.json.mockResolvedValue({
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    });
    await POST(mockReq);
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: 'Email sent successfully',
      status: 200,
    });
  });

  /* Test for missing required fields */
  it('should return 400 if required fields are missing', async () => {
    mockReq.json.mockResolvedValue({
      email: 'test@example.com',
      // Missing subject and message
    });
    await POST(mockReq);
    expect(NextResponse.json).toHaveBeenCalledWith({
      error: 'Missing required fields',
      status: 400,
    });
  });

  /* Test for invalid email format */
  it('should return 400 if email format is invalid', async () => {
    mockReq.json.mockResolvedValue({
      email: 'invalid-email', // Invalid email format
      subject: 'Test Subject',
      message: 'Test Message',
    });
    await POST(mockReq);
    expect(NextResponse.json).toHaveBeenCalledWith({
      error: 'Invalid email format',
      status: 400,
    });
  });
});
