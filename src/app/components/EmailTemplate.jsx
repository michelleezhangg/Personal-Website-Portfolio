import React from 'react';
import { CONTACT, PERSONAL } from '../constants';

export const EmailTemplate = ({ firstName, lastName, subject, message }) => (
    <div>
      <p>Hello {firstName} {lastName},</p>
      <p>{CONTACT.user_confirmation_email.body}</p>
      <p>Subject: {subject}</p>
      <p>Message: {message}</p>
      <p>{CONTACT.user_confirmation_email.closing}</p>
      <p>{PERSONAL.name}</p>
    </div>
);

export default EmailTemplate;
