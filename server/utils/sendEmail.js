import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: +process.env.EMAIL_PORT,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const sendEmail = ({ to, subject, html }) =>
  transporter.sendMail({ from: `"E-Shop" <${process.env.EMAIL_USER}>`, to, subject, html });

export default sendEmail;
