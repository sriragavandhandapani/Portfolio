const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('✅ MongoDB Connected'))
        .catch(err => console.error('❌ MongoDB Connection Error:', err));
} else {
    console.log('⚠️ MongoDB URI not provided. Running without database saving.');
}

// Email Transporter (Nodemailer)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Or use your SMTP provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// API Routes
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // 1. Save to Database (Optional)
        if (process.env.MONGODB_URI) {
            try {
                const newContact = new Contact({ name, email, message });
                await newContact.save();
                console.log("Saved contact to database.");
            } catch (dbError) {
                console.error("Warning: Failed to save to database. Proceeding to send email anyway.");
            }
        }

        // 2. Send Email Notification
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Contact Form Submission from ${name}`,
            text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
            html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
        };

        // Await the email sending so we know if it succeeded
        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent: ' + info.response);
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // We can choose to fail the request if the email doesn't send
            return res.status(500).json({ message: 'Error sending email. Please try again later.' });
        }

        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
