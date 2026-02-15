// api/test-email.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Get credentials from environment
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = parseInt(process.env.SMTP_PORT) || 465;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const EMAIL_TO = process.env.EMAIL_TO;

  // Log configuration (sanitized)
  console.log("=== SMTP Configuration Check ===");
  console.log("SMTP_HOST:", SMTP_HOST);
  console.log("SMTP_PORT:", SMTP_PORT);
  console.log("SMTP_USER:", SMTP_USER ? "✓ Set" : "✗ Missing");
  console.log("SMTP_PASS:", SMTP_PASS ? `✓ Set (${SMTP_PASS.length} chars)` : "✗ Missing");
  console.log("EMAIL_TO:", EMAIL_TO);

  // Check if SMTP_HOST needs correction
  const correctedHost = SMTP_HOST === 'gmail' ? 'smtp.gmail.com' : SMTP_HOST;
  if (SMTP_HOST === 'gmail') {
    console.log("⚠️  WARNING: SMTP_HOST is 'gmail', correcting to 'smtp.gmail.com'");
  }

  if (!SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
    return res.status(500).json({
      error: "Missing environment variables",
      details: {
        SMTP_HOST: SMTP_HOST,
        SMTP_PORT: SMTP_PORT,
        SMTP_USER: !!SMTP_USER,
        SMTP_PASS: !!SMTP_PASS,
        EMAIL_TO: !!EMAIL_TO
      }
    });
  }

  try {
    // Create transporter with corrected host
    const transporter = nodemailer.createTransport({
      host: correctedHost,
      port: SMTP_PORT,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      debug: true,
      logger: true
    });

    // Verify connection
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("✓ SMTP connection verified!");

    // Send test email
    console.log("Sending test email...");
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_USER}>`,
      to: EMAIL_TO,
      subject: "🎉 Test Email - SMTP Working!",
      text: "Success! Your SMTP configuration is working correctly.",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 2px solid #4CAF50; border-radius: 10px;">
          <h2 style="color: #4CAF50;">✓ Success!</h2>
          <p>Your SMTP configuration is working correctly.</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 14px;">
            <strong>Configuration:</strong><br>
            Host: ${correctedHost}<br>
            Port: ${SMTP_PORT}<br>
            From: ${SMTP_USER}<br>
            To: ${EMAIL_TO}<br>
            Time: ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });

    console.log("✓ Test email sent successfully!");
    console.log("Message ID:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "SMTP connection successful and test email sent!",
      config: {
        host: correctedHost,
        port: SMTP_PORT,
        from: SMTP_USER,
        to: EMAIL_TO
      },
      messageId: info.messageId,
      note: SMTP_HOST === 'gmail' ? 'SMTP_HOST was auto-corrected from "gmail" to "smtp.gmail.com"' : null
    });

  } catch (error) {
    console.error("=== SMTP ERROR ===");
    console.error("Error Code:", error.code);
    console.error("Error Command:", error.command);
    console.error("Error Response:", error.response);
    console.error("Full Error:", error);

    return res.status(500).json({
      error: "SMTP connection failed",
      code: error.code,
      command: error.command,
      response: error.response,
      message: error.message,
      suggestion: error.code === 'EAUTH'
        ? 'App password is incorrect. Please regenerate it in Google Account settings.'
        : 'Check your SMTP configuration and firewall settings.'
    });
  }
}
