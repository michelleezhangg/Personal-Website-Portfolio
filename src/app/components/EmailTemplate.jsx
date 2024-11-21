import React from "react";
import PropTypes from "prop-types";
import { CONTACT, PERSONAL } from "../utils/constants";

export const EmailTemplate = ({ firstName, lastName, subject, message }) => (
  <div>
    <p>
      Hello {firstName} {lastName},
    </p>
    <p>{CONTACT.user_confirmation_email.body}</p>
    <p>Subject: {subject}</p>
    <p>Message: {message}</p>
    <p>{CONTACT.user_confirmation_email.closing}</p>
    <p>{CONTACT.user_confirmation_email.signoff}</p>
    <p>{PERSONAL.name}</p>
  </div>
);

EmailTemplate.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default EmailTemplate;
