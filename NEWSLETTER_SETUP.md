# Newsletter & Contact Forms Setup

This website uses Formspree to handle newsletter subscriptions and contact form submissions securely.

## Current Setup

Both the newsletter and contact forms are configured to use Formspree endpoint: `https://formspree.io/f/xdkovdlg`

### Forms Configuration

**Newsletter Form:**

- Collects: Name (optional) and Email (required)
- Subject: "New ALM Research Newsletter Subscriber"
- Redirects to: Homepage with success parameter
- Spam protection: Honeypot field (`_gotcha`)

**Contact Form:**

- Collects: Name, Email, Subject, Message
- Subject: "Contact Form - ALM Research Inquiry"
- Redirects to: Contact page with success parameter
- Spam protection: Honeypot field (`_gotcha`)

## Setting up Formspree

1. **Create Formspree Account:**
   - Go to [formspree.io](https://formspree.io)
   - Sign up with your email address
   - Verify your account

2. **Create New Form:**
   - Click "New Form"
   - Enter form name (e.g., "ALM Research Newsletter & Contact")
   - Copy the form endpoint URL

3. **Update Forms:**
   - Replace the endpoint URL in both `components/newsletter.tsx` and `app/contact/page.tsx`
   - The endpoint should look like: `https://formspree.io/f/YOUR_FORM_ID`

4. **Configure Form Settings:**
   - Set up email notifications
   - Configure spam protection
   - Set up integrations (optional)

## Form Data Management

**Email Storage:**

- All submissions are stored securely in your Formspree dashboard
- You receive email notifications for each submission
- Data is not publicly accessible
- Submissions can be exported as CSV

**Security Features:**

- Honeypot spam protection
- reCAPTCHA integration (optional)
- Email verification
- Rate limiting

## Accessing Submissions

1. Log into your Formspree dashboard
2. Select your form
3. View submissions in the "Submissions" tab
4. Export data as needed for your newsletter management

## Next Steps

Consider integrating with email marketing tools:

- Mailchimp
- ConvertKit
- Substack
- Beehiiv

This can be done through Formspree integrations or by exporting subscriber data and importing it into your chosen platform.
