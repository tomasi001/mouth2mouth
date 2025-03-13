import nodemailer from "nodemailer";

// Check if required environment variables are set
const isEmailConfigured =
  process.env.GMAIL_EMAIL &&
  process.env.GMAIL_APP_PASSWORD &&
  process.env.ADMIN_EMAIL;

// Create a transporter object for sending emails
export const transporter = isEmailConfigured
  ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
  : null; // No transporter if not configured

/**
 * Sends a notification email to admin when someone signs up for the mailing list
 * In development, if email is not configured, it logs the signup to the console
 *
 * @param subscriberEmail The email address of the person signing up
 * @returns A promise that resolves when the email is sent or logged
 */
export async function sendMailingListSignupNotification(
  subscriberEmail: string
): Promise<void> {
  // Development fallback - log signup to console if email is not configured
  if (!isEmailConfigured) {
    console.log("\x1b[33m%s\x1b[0m", "╔════════════════════════════════════╗");
    console.log("\x1b[33m%s\x1b[0m", "║     EMAIL NOT CONFIGURED           ║");
    console.log("\x1b[33m%s\x1b[0m", "╠════════════════════════════════════╣");
    console.log(
      "\x1b[33m%s\x1b[0m",
      `║  New Subscriber: ${subscriberEmail.padEnd(19)} ║`
    );
    console.log("\x1b[33m%s\x1b[0m", "╚════════════════════════════════════╝");
    return;
  }

  try {
    const mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "New Mailing List Signup",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Mailing List Subscriber</h2>
          <p>A new user has signed up for your mailing list:</p>
          <div style="background-color: #f4f4f4; padding: 20px; margin: 20px 0;">
            <strong>Email:</strong> ${subscriberEmail}
          </div>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    await transporter!.sendMail(mailOptions);
    console.log(`Signup notification sent for ${subscriberEmail}`);
  } catch (error) {
    console.error("Error sending signup notification:", error);
    throw new Error("Failed to send signup notification");
  }
}
