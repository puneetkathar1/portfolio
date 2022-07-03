import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: "freelancer.puneetkathar@gmail.com",
      to: "puneetkathar1@gmail.com",
      subject: req.body.subject,
      text: req.body.text,
    });

    console.log("Message Sent");
    return res.status(200).json({ message: "Message Sent" });
  } catch (err) {
    console.log(err);
  }
}
