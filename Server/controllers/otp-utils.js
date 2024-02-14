const nodemailer = require('nodemailer');

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

const sendOTP = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            // service: 'gmail',
            host:"smtp-relay.brevo.com",
            port:587,
            auth: {
                user: 'anirudhhbehera@gmail.com',
                pass: process.env.Smtp_pass
            }
        });
        const mailOptions = {
            from: 'no-reply@anirudhh.com',
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP verification code is ${otp}`
        };
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { generateOTP, sendOTP };
