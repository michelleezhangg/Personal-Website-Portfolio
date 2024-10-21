import { POST } from '../app/api/send/route';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Mock the constants
jest.mock('../app/constants/constants', () => ({
  THANK_YOU_MESSAGE: 'Thank you for contacting me!',
  SUBMISSION_CONFIRMATION: 'New message submitted!',
  EMAIL: 'michelleeeezhangggg@gmail.com',
}));

// Mock the Resend library
jest.mock('resend');

// Mock environment variables
process.env.RESEND_API_KEY = 'test_api_key';
process.env.FROM_EMAIL = 'test@example.com';

// Mock NextRequest and NextResponse
jest.mock('next/server', () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
  },
}));

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

    // Mock NextResponse.json for all tests
    NextResponse.json.mockImplementation((data, options) => ({
      status: options?.status || 200,
      json: async () => data,
    }));
  });

  /* Email sent successfully */
  it('should send email successfully', async () => {
    const mockBody = {
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    };

    // Mock NextRequest to return our mock body when json() is called
    NextRequest.mockImplementation(() => ({
      json: jest.fn().mockResolvedValue(mockBody),
    }));

    const req = new NextRequest('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify(mockBody),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(200);
    expect(data.message).toBe('Email sent successfully');
    expect(mockSend).toHaveBeenCalledTimes(2); // Once for admin, once for user
  });

  /* Missing fields */
  it('should return 400 for missing fields', async () => {
    // Mock a request with missing fields
    const mockBody = {
      email: 'test@example.com',
      // Missing subject and message
    };

    NextRequest.mockImplementation(() => ({
      json: jest.fn().mockResolvedValue(mockBody),
    }));  

    const req = new NextRequest('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify(mockBody),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Missing required fields');
    expect(mockSend).not.toHaveBeenCalled();
  });

  /* Resent throws an error */
  it('should return 500 if Resend throws an error', async () => {
    // Mock Resend to throw an error
    mockSend.mockRejectedValue(new Error('Resend error'));

    const mockBody = {
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message',
    };

    NextRequest.mockImplementation(() => ({
      json: jest.fn().mockResolvedValue(mockBody),
    }));
    
    const req = new NextRequest('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify(mockBody),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(500);
    expect(data.error).toBe('An unexpected error occurred');
  });

  /* Invalid email format */
  it('should handle invalid email format', async () => {
    const mockBody = {
      email: 'invalid-email', // Invalid email format
      subject: 'Test Subject',
      message: 'Test Message',
    };

    NextRequest.mockImplementation(() => ({
      json: jest.fn().mockResolvedValue(mockBody),
    }));

    const req = new NextRequest('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify(mockBody),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Invalid email format');
    expect(mockSend).not.toHaveBeenCalled();
  });

  /* Handling empty message */
  it('should handle empty message', async() => {
    const mockBody = {
      email: 'test@example.com',
      subject: 'Test Subject',
      message: '', // Empty message
    };

    NextRequest.mockImplementation(() => ({
      json: jest.fn().mockResolvedValue(mockBody),
    }));

    const req = new NextRequest('http://localhost:3000/api/send', { // TODO: Update with purchased domain
      method: 'POST',
      body: JSON.stringify(mockBody),
    });

    const res = await POST(req);
    const data = await res.json();

    expect(res.status).toBe(400);
    expect(data.error).toBe('Missing required fields');
    expect(mockSend).not.toHaveBeenCalled();
  });
});
