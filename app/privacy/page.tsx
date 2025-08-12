import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for fernandotn.github.io.',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important. This site collects minimal data necessary
          to operate and improve the website. Any analytics collected are
          aggregated and do not identify individual users.
        </p>
        <h2>Analytics</h2>
        <p>
          We may use Google Analytics (GA4) to understand how visitors interact
          with the site. You can opt out using your browser settings or
          extensions.
        </p>
        <h2>Newsletter</h2>
        <p>
          If you subscribe to the newsletter, your submitted name and email will
          be processed by the configured form provider solely for the purpose of
          sending updates. You can unsubscribe at any time.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy requests, contact{' '}
          <a href="mailto:hello@fernandotorres.io">hello@fernandotorres.io</a>.
        </p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
