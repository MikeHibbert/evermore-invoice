
import sendgrid from '@sendgrid/mail';

export const sendInvoice = () => {
  sendgrid.setApiKey("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");

  const msg = {
    to: 'hibbert.michael@gmail.com',
    from: 'admin@quick.build',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sendgrid.send(msg);
}