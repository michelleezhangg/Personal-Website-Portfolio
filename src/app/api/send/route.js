import { Resend } from 'resend';
import { Response } from 'next/server';
import { THANK_YOU_MESSAGE, SUBMISSION_CONFIRMATION, EMAIL } from '../../constants';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {

  try {
    const { body } = req.json();
    const { email, subject, message } = body;

    // Input validation
    if (!email || !subject || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email to myself (Michelle Zhang)
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
      return Response.json({ error: 'Failed to process submission' }, { status: 500 });
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
      return Response.json({ error: 'Failed to send confirmation email' }, { status: 500 });
    }

    return Response.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return Response.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
