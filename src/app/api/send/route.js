import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();

    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json({
        error: 'Missing required fields',
        status: 400,
      });
    }

    // Send email
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: (
        <div>
          <h2>{subject}</h2>
          <p>Thank you for contacting me!</p>
          <p>I will try to get back to you as soon as I can.</p>
          <p>Submitted message: {message}</p>
        </div>
      ),
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({
        error: 'Failed to send email',
        status: 500,
      });
    }

    return NextResponse.json({
      message: 'Email sent successfully',
      status: 200,
    });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({
      error: 'Internal server error',
      status: 500,
    });
  }
}
