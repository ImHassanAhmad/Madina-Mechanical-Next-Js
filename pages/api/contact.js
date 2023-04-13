import nodemailer from "nodemailer";

const user = "info@madinamechanical.com";
const pass = "HEAT1cool!";

let transporter = nodemailer.createTransport({
  host: "smtp.netfirms.com",
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
  tls: { ciphers: "SSLv3" },
});

let mailOptions = {
  from: user,
  to: user,
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    let { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message)
      res.status(400).json({ message: "Bad Request" });
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `${email} (${firstName} ${lastName})`,
        text: message,
      });
      res.status(200).json(req.body);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } else res.status(400).json({ message: "Bad Request" });
}
