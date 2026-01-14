require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // For password hashing
const mongoose = require('mongoose'); // Database connection
const { check, validationResult } = require('express-validator'); // For input validation
const nodemailer = require('nodemailer');
const cors = require('cors'); // For handling CORS
const bodyParser = require('body-parser');

// const User = require('./models/User');
// const Post = require('./models/Post');
// const Comment = require('./models/Comment');
// const { json } = require('body-parser');
// const { response } = require('express');
// const { resolve } = require('path');
// const { request } = require('http');
// const { error } = require('console');
  

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3003; // Change to a different port

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Add name field
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User ', userSchema);

// Signup Endpoint
app.post(
  '/signup',
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, password } = req.body; // Capture name, email and password from the request body
    try {

      console.log('Incoming signup request:', req.body); // Log incoming request
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ success: false, message: 'User  already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser  = new User({ 
            name, 
            email, 
            password: hashedPassword 
          }
      ); 

      // Save name to the database
      await newUser .save();
      
      res.status(201).json({ success: true, message: 'Signup successful!' });
    } catch (err) {
      console.error('Error during signup:', err); // Log the error details
      res.status(500).json({ success: false, message: 'Server error', error: err.message });
    }
  });

// Login Endpoint
app.post(
  '/login',
  [
    check('email', 'Invalid email').isEmail(),
    check('password', 'Password cannot be empty').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      res.status(200).json({
        success: true,
        message: 'Login successful!',
        user: { name: user.name }, // Send the user's name or any other identifier
      });
    } catch (err) {
      console.error('Error during login:', err);
      res.status(500).json({ success: false, message: 'Server error' });
    }
  }
);

// Contact Form Endpoint
app.post('/contact', async (req, res) => {
  const { name, email, subject, message, number } = req.body;
  console.log('Received contact form submission:', req.body); // Log the request data

  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Use environment variable for email
      pass: process.env.EMAIL_PASS, // Use environment variable for email password
    },
  });

  // Setup email data
  let mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL_USER, // Recipient's email (your email)
    subject: subject, // Subject of the email
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`, // Email body
  };

  // Send mail
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});