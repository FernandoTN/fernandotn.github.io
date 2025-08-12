import { Mail } from 'lucide-react';

// ALM Research Newsletter using Formspree for email collection
export function Newsletter() {
  return (
    <section className="rounded-2xl bg-muted/50 p-8 md:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-8">
          <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground">
            Get weekly insights on Autonomous Language Models, AI research, and
            the latest developments in autonomous AI technology delivered
            straight to your inbox.
          </p>
        </div>

        <form
          action="https://formspree.io/f/xqalnlwv"
          method="POST"
          className="space-y-4"
        >
          {/* Honeypot for spam protection */}
          <input type="text" name="_gotcha" className="hidden" />

          {/* Hidden fields for better organization */}
          <input
            type="hidden"
            name="_subject"
            value="New ALM Research Newsletter Subscriber"
          />
          <input
            type="hidden"
            name="_next"
            value="https://fernandotn.github.io/?subscribed=true"
          />

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
            Join the ALM research community. No spam, unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
}
