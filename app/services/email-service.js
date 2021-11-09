require('dotenv').config();
const sengrid = require('@sendgrid/mail');

sengrid.setApiKey(process.env.SENGRID_API_KEY);

module.exports = {

  sendEmail: async (email, html) => {
    try {
      const msg = {
        to: email,
        from: process.env.SENDER_EMAIL,
        subject: 'Email de bienvenida',
        html
      };

      await sengrid.send(msg);
      console.log('Email sent successfully');
    } catch (err) {
      console.log(err);
    }
  }
};
