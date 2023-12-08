
const nodemailer = require('nodemailer');

const sendEmail = async (email, subject, message) => {
  console.log(email);
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'derricknyarangi22@gmail.com',
      pass: 'lmjm nwkc nqhs rzsu',
    },
  });

  var mailOptions = {
    from: 'derricknyarangi22@gmail.com',
    to: email, // Use the 'email' parameter instead of a hardcoded email address
    subject: subject,
    html: message,
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
// 'rs5b.rcnoc.com'

module.exports ={
    sendEmail,
}