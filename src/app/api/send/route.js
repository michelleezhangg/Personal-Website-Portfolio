import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { THANK_YOU_MESSAGE, SUBMISSION_CONFIRMATION, EMAIL } from '../../constants/constants';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

// Helper function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(req) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();

    // Check for missing fields
    if (!email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Check for empty message
    if (message.trim() === '') {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
    }

    // Send email to admin
    const { error: adminError } = await resend.emails.send({
      from: fromEmail,
      to: EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      react: (
        <>
          <h1>New Contact Form Submission</h1>
          <p>From: {email}</p>
          <p>Subject: {subject}</p>
          <p>Message: {message}</p>
        </>
      ),
    });

    if (adminError) {
      console.error('Error sending admin email:', adminError);
      return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 });
    }

    // Confirmation email to user
    const {error: userError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: THANK_YOU_MESSAGE,
      react: (
        <>
          <h1>{THANK_YOU_MESSAGE}</h1>
          <p>{SUBMISSION_CONFIRMATION}</p>
        </>
      ),
    });

    if (userError) {
      console.error('Error sending user confirmation email:', userError);
      return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
