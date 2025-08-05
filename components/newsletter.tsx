'use client';

import { useState } from 'react';
import { Mail, Loader2, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('idle');

    // For static export, redirect to mailto or external form
    // In production, you would integrate with Formspree, Netlify Forms, or similar
    try {
      // Simulate successful subscription for demo
      setTimeout(() => {
        setStatus('success');
        setMessage('Thank you for subscribing! You\'ll hear from me soon.');
        setEmail('');
        setName('');
        setIsLoading(false);
      }, 1000);
      
      // Alternative: redirect to external form service
      // window.open(`mailto:hello@fernandotorres.io?subject=Newsletter Subscription&body=Name: ${name}%0AEmail: ${email}`, '_blank');
    } catch (error) {
      setStatus('error');
      setMessage('Please email hello@fernandotorres.io to subscribe.');
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-muted/50 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground">
            Get the latest insights on AI, technology trends, and startup adventures 
            delivered straight to your inbox.
          </p>
        </div>

        {status === 'success' ? (
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring focus:border-transparent outline-none"
              />
              <Button type="submit" disabled={isLoading} className="px-8">
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
            
            {status === 'error' && (
              <p className="text-red-600 text-sm">{message}</p>
            )}
            
            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time. I respect your privacy.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}