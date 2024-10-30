import React from 'react';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { CONTACT, PERSONAL } from '@/app/constants';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.ADMIN_EMAIL;

// Regular expression pattern for email verification
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export async function POST(req) {
  try {
    console.log('Received request:', req);
    // Parse the request body
    const { firstName, lastName, email, subject, message } = await req.json();
    console.log('Parsed request body:', { firstName, lastName, email, subject, message });

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        error: 'Invalid email format',
        status: 400,
      });
    }

    // Validate other required fields
    if (!firstName || !lastName || !subject || !message) {
      console.log('Fields:', { firstName, lastName, email, subject, message });
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
          <p>Hello {firstName} {lastName},</p>
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

    console.log('Email sent successfully');
    return NextResponse.json({
      message: 'Email sent successfully',
      status: 200,
    });
  } catch (error) {
    console.error('Caught error in POST function:', error);
    return NextResponse.json({
      error: 'Internal server error',
      status: 500,
    });
  }
}
