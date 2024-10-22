import { POST } from '@/app/api/send/route';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Mock external dependencies
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn(),
    },
  })),
}));

describe('POST function', () => {
  let mockReq;
  let mockResend;

  beforeEach(() => {
    mockReq = {
      json: jest.fn(),
    };
    mockResend = new Resend();
    process.env.RESEND_API_KEY = 'test_api_key';
    process.env.ADMIN_EMAIL = 'admin@example.com';
    process.env.PROFESSIONAL_EMAIL = 'me@example.com';
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return 200 if email is sent successfully', async () => {
    mockReq.json.mockResolvedValue({
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    });

    mockResend.emails.send.mockResolvedValue({ error: null });
    await POST(mockReq);

    expect(NextResponse.json).toHaveBeenCalledWith({
      message: 'Email sent successfully',
      status: 200,
    });
  });
});
