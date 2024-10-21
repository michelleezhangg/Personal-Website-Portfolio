import { Resend } from 'resend';
import { THANK_YOU_MESSAGE, SUBMISSION_CONFIRMATION } from '../../constants';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = req.json();
  const { email, subject, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["michelleeeezhangggg@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{THANK_YOU_MESSAGE}</p>
          <p>{SUBMISSION_CONFIRMATION}</p>
          <p>{message}</p>
        </>
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
