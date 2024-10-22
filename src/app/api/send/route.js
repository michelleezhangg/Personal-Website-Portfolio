import React from 'react';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { CONTACT, PERSONAL } from '@/app/constants';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.ADMIN_EMAIL;

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

    // Send confirmation email to user
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: CONTACT.user_confirmation_email.subject,
      react: (
        <div>
          <p>Hello {email},</p>
          <p>{CONTACT.user_confirmation_email.body}</p>
          <p><strong>Subject</strong>: {subject}</p>
          <p><strong>Message</strong>: {message}</p>
          <p>{CONTACT.user_confirmation_email.closing}</p>
          <p>{PERSONAL.name}</p>
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
