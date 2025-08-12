import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Fernando Torres. Reach out for collaborations, speaking, or consulting inquiries.',
};

export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mb-8 text-muted-foreground">
          I’d love to hear from you. For partnerships, collaborations, speaking
          engagements, or consulting inquiries, use the form below or email me
          directly at{' '}
          <a className="underline" href="mailto:fertorresnavarrete@gmail.com">
            fertorresnavarrete@gmail.com
          </a>
          .
        </p>

        {endpoint ? (
          <form action={endpoint} method="POST" className="space-y-4">
            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" />
            {/* Form fields */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <input
              className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="min-h-[140px] w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
              name="message"
              placeholder="Your message"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
            {/* Optional redirect after submit */}
            <input
              type="hidden"
              name="_subject"
              value="New contact form submission"
            />
          </form>
        ) : (
          <div className="rounded-lg border p-6">
            <p className="text-muted-foreground">
              Form endpoint is not configured. Please email{' '}
              <a
                className="underline"
                href="mailto:fertorresnavarrete@gmail.com"
              >
                fertorresnavarrete@gmail.com
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
