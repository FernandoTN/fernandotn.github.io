import { Mail } from 'lucide-react';

// Static-friendly newsletter: posts to a configured endpoint (e.g., Formspree)
// Fallback shows a mailto subscribe option if no endpoint is configured
export function Newsletter() {
  const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

  return (
    <section className="rounded-2xl bg-muted/50 p-8 md:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground">
            Get the latest insights on AI, technology trends, and startup
            adventures delivered straight to your inbox.
          </p>
        </div>

        {endpoint ? (
          <form action={endpoint} method="POST" className="space-y-4">
            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" />
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                name="name"
                placeholder="Your name (optional)"
                className="flex-1 rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="flex-1 rounded-lg border border-input bg-background px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time. I respect your privacy.
            </p>
          </form>
        ) : (
          <div className="rounded-lg border p-6">
            <p className="text-muted-foreground">
              Newsletter endpoint not configured. Email{' '}
              <a
                className="underline"
                href="mailto:hello@fernandotorres.io?subject=Newsletter%20Subscription"
              >
                hello@fernandotorres.io
              </a>{' '}
              to subscribe.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
