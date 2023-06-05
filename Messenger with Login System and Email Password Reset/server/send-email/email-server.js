const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
require("dotenv").config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * SendEmail.
 * @param {string} token - unique token for password reset url.
 * @param {string} userId - unique user Id.
 * @param {string} userEmail - user's email address.
 * @author [Satoshi Ishida]
 */
const SendEmail = (token, userId, userEmail) => {
  const template = {
    from: process.env.REACT_APP_ADDRESS,
    to: userEmail,
    subject: "Messenger: Link to Reset Password",
    text:
      "Hello " +
      "User ID: " +
      userId +
      "," +
      "\n\n" +
      "We have received a request to reset your password for the Messenger account associated with " +
      userEmail +
      "." +
      "\n" +
      "No changes have been made to your account yet.\n\n" +
      "You can reset your password by clicking the link below:\n" +
      `http://localhost:3000/reset/${token}\n\n` +
      "If you did not make this request, please ignore this email and your password will remain unchanged.\n\n" +
      "Best regards,\n" +
      "Messenger Team\n",
  };

  const transporter = nodemailer.createTransport({
    name: "outlook.com",
    host: "smtp-mail.outlook.com",
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3", // needed for outlook.
    },
    auth: {
      user: process.env.REACT_APP_ADDRESS, // sender's login details.
      pass: process.env.REACT_APP_PASSWORD,
    },
  });
  transporter.sendMail(template, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

/**
 * Send email.
 */
router.post("/", async (req, res) => {
  try {
    const token = req.body.token,
      userId = req.body.userId,
      userEmail = req.body.userEmail;
    SendEmail(token, userId, userEmail);
    res.json({ msg: "Email successfully sent." });
  } catch (error) {
    res.status(404).json({ msg: "Error." });
  }
});

module.exports = router;
