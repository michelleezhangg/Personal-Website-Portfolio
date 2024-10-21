import { POST } from '../app/api/send/route';
import { Request } from 'next/server';
import { Resend } from 'resend';

// Mock the Resend library
jest.mock('resend');

// Mock environment variables
process.env.RESEND_API_KEY = 'test_api_key';
process.env.FROM_EMAIL = 'test@example.com';

describe('POST /api/send', () => {
  let mockSend;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Set up mock for Resend's send method
    mockSend = jest.fn().mockResolvedValue({ data: {}, error: null });
    Resend.mockImplementation(() => ({
      emails: { send: mockSend },
    }));
  });

  it('should send email successfully', async () => {
    const req = new Request('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify({
        to: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test Message',
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toBe('Email sent successfully');
    expect(mockSend).toHaveBeenCalledTimes(2); // Once for admin, once for user
  });

  it('should return 400 for missing fields', async () => {
    const req = new Request('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        // Missing subject and message
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Missing required fields');
  });

  it('should return 500 if Resend throws an error', async () => {
    mockSend.mockRejectedValue(new Error('Resend error'));
    
    const req = new Request('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify({
        to: 'test@example.com',
        subject: 'Test Subject',
        message: 'Test Message',
      }),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.error).toBe('An unexpected error occured');
  });
});
