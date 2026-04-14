const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// ✅ better CORS (frontend allow)
app.use(cors({
  origin: "http://localhost:5173", // React app URL
}));

app.use(express.json());

// ✅ Route
app.post("/contact", async (req, res) => {
  console.log("Incoming Data:", req.body); // ✅ debug

  const {
    name,
    email,
    company,
    projectType,
    budget,
    timeline,
    description,
    source,
  } = req.body;

  // ✅ safer validation
  if (!name || !email || !description) {
    return res.status(400).json({ msg: "Name, Email & Description required" });
  }

  try {
    // ✅ transporter (optimized)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ verify connection (important)
    await transporter.verify();

    // ✅ Admin Mail
    const adminMail = {
      from: `"Project Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `🚀 New Project Request - ${name}`,
      html: `
        <h2>New Project Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
        <p><b>Project Type:</b> ${projectType || "N/A"}</p>
        <p><b>Budget:</b> ${budget || "N/A"}</p>
        <p><b>Timeline:</b> ${timeline || "N/A"}</p>
        <p><b>Description:</b> ${description}</p>
        <p><b>Source:</b> ${source || "N/A"}</p>
      `,
    };

    // ✅ Auto Reply
    const userMail = {
      from: `"MukeshDev Tech" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your project request 🚀",
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out! We have received your project details.</p>
        <p>Our team will contact you soon.</p>
        <br/>
        <p>Regards,<br/>MukeshDev Tech</p>
      `,
    };

    // ✅ send both emails in parallel (faster)
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return res.status(200).json({
      success: true,
      msg: "Project request sent successfully 🚀",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      msg: "Email failed",
      error: error.message, // ✅ debug help
    });
  }
});

// ✅ dynamic port (important for deployment)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));