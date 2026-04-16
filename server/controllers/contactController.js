import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

export const submitContact = async (req, res, next) => {
  try {
    const { name, phone, email, message } = req.body;
    await Contact.create({ name, phone, email, message });
    await sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b> ${message}</p>`,
    });
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) { next(err); }
};
