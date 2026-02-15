#!/usr/bin/env node
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const args = process.argv.slice(2);
const doSend = args.includes("--send");

function missingEnv(msg) {
  console.error("❌ " + msg);
  console.error("Make sure your .env defines SMTP_HOST, SMTP_USER, SMTP_PASS, and EMAIL_TO (or provide --send to actually send).\n");
  process.exit(1);
}

if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
  missingEnv('SMTP configuration not found in environment');
}

const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
const secure = String(process.env.SMTP_PORT) === "465" || port === 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function main() {
  try {
    console.log("🔎 Verifying SMTP transporter...");
    await transporter.verify();
    console.log("✅ SMTP transporter verified");

    if (!doSend) {
      console.log("ℹ️ Run with `--send` to send a test email after verification.");
      process.exit(0);
    }

    if (!process.env.EMAIL_TO) {
      console.error("❌ EMAIL_TO not set in environment. Cannot send test email.");
      process.exit(1);
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_TO,
      subject: process.env.TEST_SUBJECT || "[Portfolio] Test email",
      text: process.env.TEST_TEXT || "This is a test email sent from the Portfolio repo to verify SMTP configuration.",
      html: `<p>${(process.env.TEST_TEXT || "This is a test email sent from the Portfolio repo to verify SMTP configuration.").replace(/\n/g, "<br>")}</p>`,
    };

    console.log(`✉️ Sending test email to ${process.env.EMAIL_TO}...`);
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Test email sent. MessageId:", info.messageId || info.response || info);
    process.exit(0);
  } catch (err) {
    console.error("❌ SMTP verification/send failed:", err && err.message ? err.message : err);
    process.exit(1);
  }
}

main();
