import confirmationOrder from '../emailTemplates/confirmationOrder';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendConfirmationEmail(cart, user) {
  const emailParams = {
    to: [user.email, process.env.EMAIL_TO],
    from: 'herickrossato@gmail.com',
    subject: `Confirmação de Reserva - ${user.name}`,
    text: 'Reserva confirmada',
    html: confirmationOrder(cart),
  };

  await sgMail.send(emailParams);
}
