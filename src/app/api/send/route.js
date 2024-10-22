import { Resend } from 'resend';
import { CONTACT } from '@/app/constants';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: subject,
      react: (
        <div>
          <h1>{subject}</h1>
          <p>{CONTACT.messages.thank_you}</p>
          <p>I will try to get back to you as soon as I can.</p>
          <p>New message submitted: {message}</p>
        </div>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
