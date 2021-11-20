require('dotenv').config();
const sengrid = require('@sendgrid/mail');

sengrid.setApiKey(process.env.SENGRID_API_KEY);

module.exports = {
  sendEmail: async (email, html, subject) => {
    try {
      const msg = {
        to: email,
        from: process.env.SENDER_EMAIL,
        subject,
        html,
      };

      await sengrid.send(msg);
      console.log('Email sent successfully');
    } catch (err) {
      console.log(err);
    }
  },
};
