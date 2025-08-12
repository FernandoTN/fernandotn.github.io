import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for fernandotn.github.io.',
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="prose mx-auto max-w-3xl dark:prose-invert">
        <h1>Terms of Service</h1>
        <p>
          By using this website, you agree to these terms. Content is provided
          for informational purposes only and does not constitute professional
          advice. We reserve the right to modify the site and these terms at any
          time without notice.
        </p>
        <h2>Use of Content</h2>
        <p>
          You may share links to content provided attribution is preserved. Do
          not misuse the site or attempt to disrupt its operation.
        </p>
        <h2>Liability</h2>
        <p>
          The site is provided &quot;as is&quot; without warranties. We are not
          liable for any damages arising from use of the site.
        </p>
        <h2>Contact</h2>
        <p>
          Questions? Contact{' '}
          <a href="mailto:hello@fernandotorres.io">hello@fernandotorres.io</a>.
        </p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
