import { POST } from '@/app/api/send/route';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Mock the external dependencies
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

describe('POST handler', () => {
  let mockReq;
  let resendInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    mockReq = {
      json: jest.fn(),
    };
    resendInstance = new Resend();
  });

  test('should return 400 if required fields are missing', async () => {
    mockReq.json.mockResolvedValue({});

    await POST(mockReq);

    expect(NextResponse.json).toHaveBeenCalledWith({
      error: 'Missing required fields',
      status: 400,
    });
  });

  test('should send email and return 200 if all fields are provided', async () => {
    const mockData = {
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    };
    mockReq.json.mockResolvedValue(mockData);

    resendInstance.emails.send.mockResolvedValue({ error: null });

    await POST(mockReq);

    expect(resendInstance.emails.send).toHaveBeenCalled();
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: 'Email sent successfully',
      status: 200,
    });
  });
});
