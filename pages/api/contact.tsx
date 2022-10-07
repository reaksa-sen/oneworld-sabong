import nodemailer, { SendMailOptions } from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next/types";

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const MAIL_USERNAME = "reaksasen804@gmail.com";
  const MAIL_PASSWORD = "hfkonhqpzgmxhoyd";
  // const REDIRECT_EMAIL = "pinknea632@gmail.com";

  const body: ContactForm = req.body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    // host: 'mail.hover.com',
    port: 465,
    auth: {
      user: "reaksasen804@gmail.com",
      pass: "hfkonhqpzgmxhoyd",
    },
  });

  const mailPackage: SendMailOptions = {
    from: body.email,
    to: "reaksasen804@gmail.com",
    subject: `Contact fromaim ${body.subject}`,
    html: `<br>${body.message}
              <br><br><br><b>From:</b> ${body.email}
              <br><b>Name:</b> ${body.fullName}
              <br><b>Phone Number:</b> ${body.phone}`,
  };

  try {
    await transporter.sendMail(mailPackage);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(400).json({ message: "Message sent fail" });
    // throw new Error('Errror code 400');
  }
}
