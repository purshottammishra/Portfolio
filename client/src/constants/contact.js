export const CONTACT_EMAIL = 'purshottamm654@gmail.com';

const emailSubject = 'Full Stack Developer Opportunity - Purshottam Mishra';
const emailBody = `Hello Purshottam,

I visited your portfolio and would like to connect with you regarding a Full Stack Developer opportunity.

Job Title:
Company:
Message:

Best regards,`;

export const PROFESSIONAL_EMAIL_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  CONTACT_EMAIL
)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
