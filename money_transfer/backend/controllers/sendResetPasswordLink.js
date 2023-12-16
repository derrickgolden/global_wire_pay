
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendResetPasswordLink = async (email, link) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASS,
    },
  });

  var mailOptions = {
    from: process.env.EMAIL_NAME,
    to: email, // Use the 'email' parameter instead of a hardcoded email address
    subject: 'Password Reset Request',
    html: link,
  };

  try {
    const response = await transporter.sendMail(mailOptions);
    console.log('Email sent:', response);
    return ({success: true, response})
  } catch (error) {
    console.error('Error sending email:', error);
    return({success: false, error: error.message})
  }
};

module.exports ={
    sendResetPasswordLink,
}