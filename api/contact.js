// Vercel Serverless Function for handling contact form submissions
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, name, message, type } = req.body;

    // Basic validation
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // Here you would integrate with your email service
    // Examples: SendGrid, Mailgun, Resend, etc.
    
    // For demo purposes, we'll just log the submission
    console.log('Form submission:', {
      email,
      name,
      message,
      type,
      timestamp: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    });

    // You can integrate with services like:
    // - SendGrid: https://sendgrid.com/
    // - Mailgun: https://www.mailgun.com/
    // - Resend: https://resend.com/
    // - ConvertKit: https://convertkit.com/
    // - Mailchimp: https://mailchimp.com/

    // Example SendGrid integration:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'support@learnsphere.com',
      from: 'noreply@learnsphere.com',
      subject: `New ${type} submission from ${name || email}`,
      text: `
        Email: ${email}
        Name: ${name || 'Not provided'}
        Type: ${type}
        Message: ${message || 'No message provided'}
      `,
      html: `
        <h3>New ${type} submission</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Name:</strong> ${name || 'Not provided'}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `
    };
    
    await sgMail.send(msg);
    */

    return res.status(200).json({ 
      message: 'Thank you for your submission! We\'ll get back to you soon.',
      success: true 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: 'Something went wrong. Please try again later.',
      success: false 
    });
  }
}