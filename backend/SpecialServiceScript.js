require("dotenv").config();

const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 9069;

app.use(express.json());
app.use(express.text());
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.post("/", (req, res) => {
    const userSpecialService = req.body.specialTextAreaValue;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "iBulk Special Request",
        html: `
            <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px; font-family: Arial, sans-serif; color: #333;">
                <h2 style="color: black;">iBulk Special Request</h2>
                <p style="font-size: 16px; margin-bottom: 20px;">
                    <strong>Special Request:</strong><br>
                    ${userSpecialService}
                </p>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.send({
                success: false,
                error: "Error sending email.",
            });
        }

        console.log("Email sent:", info.response);
        res.send({ success: true });
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));