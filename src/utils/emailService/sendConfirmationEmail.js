import confirmationOrder from '../emailTemplates/confirmationOrder';
import ses from '../ses';

export default async function sendConfirmationEmail(cart, user) {
  const emailParams = {
    Destination: {
      ToAddresses: [
        'herickrossato@gmail.com',
        user.email,
      ],
    },
    Message: {
      Body: {
        Html: {
          Data: confirmationOrder(cart),
        },
        Text: {
          Data: 'test',
        },
      },
      Subject: {
        Data: `Confirmação de reserva - ${user.name}`,
      },
    },

    Source: 'herickrossato@gmail.com',
    Tags: [
      {
        Name: 'Order',
        Value: 'Order',
      },
    ],
  };

  ses.sendEmail(emailParams, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });
}
