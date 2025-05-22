import type { NextApiRequest, NextApiResponse } from 'next';
import * as brevo from '@getbrevo/brevo'; // Brevo SDK

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Restrict to POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract form data from request body
  const { fullName, email, message } = req.body;

  try {
    // Initialize Brevo Transactional Emails API
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    // Define the email content using Brevo's SendSmtpEmail class
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.to = [{ email: process.env.RECIPIENT_EMAIL }];
    sendSmtpEmail.sender = { email: process.env.SENDER_EMAIL, name: 'FENOR' };
    sendSmtpEmail.subject = 'New Contact Form Submission';
    sendSmtpEmail.htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #000B18; border-top-left-radius: 8px; border-top-right-radius: 8px;">
              <h1 style="color: #FFDA66; margin: 0; font-size: 24px;">FENOR</h1>
              <p style="color: #ffffff; margin: 5px 0 0; font-size: 16px;">New Contact Form Submission</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding: 20px;">
              <h2 style="color: #000B18; font-size: 20px; margin: 0 0 10px;">Hello,</h2>
              <p style="color: #333333; font-size: 16px; margin: 0 0 20px;">You have received a new message from your website's contact form.</p>
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #333333; font-size: 16px; font-weight: bold; width: 30%;">Name:</td>
                  <td style="padding: 10px 0; color: #333333; font-size: 16px;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #333333; font-size: 16px; font-weight: bold; width: 30%;">Email:</td>
                  <td style="padding: 10px 0; color: #333333; font-size: 16px;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #333333; font-size: 16px; font-weight: bold; width: 30%;">Message:</td>
                  <td style="padding: 10px 0; color: #333333; font-size: 16px;">${message}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Support Contact -->
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #f4f4f4; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
              <p style="color: #666666; font-size: 14px; margin: 0;">If something goes wrong, please contact support at +91 6202130675.</p>
              <p style="color: #666666; font-size: 14px; margin: 5px 0 0;">© 2025 FENOR. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send the email using Brevo's API
     const response=await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Brevo API Response:', response);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // Log the error for debugging
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}