declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

type GTagEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function trackEvent({ action, category, label, value }: GTagEvent) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

export function trackPageView(url: string) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

// Specific event tracking functions
export const analytics = {
  newsletter: {
    subscribe: (email: string) => {
      trackEvent({
        action: 'newsletter_subscribe',
        category: 'engagement',
        label: email,
      });
    },
    error: (error: string) => {
      trackEvent({
        action: 'newsletter_error',
        category: 'error',
        label: error,
      });
    },
  },
  
  blog: {
    read: (slug: string) => {
      trackEvent({
        action: 'blog_read',
        category: 'content',
        label: slug,
      });
    },
    share: (slug: string, platform: string) => {
      trackEvent({
        action: 'blog_share',
        category: 'social',
        label: `${slug}_${platform}`,
      });
    },
  },
  
  project: {
    view: (slug: string) => {
      trackEvent({
        action: 'project_view',
        category: 'content',
        label: slug,
      });
    },
    click_external: (slug: string, type: 'website' | 'github') => {
      trackEvent({
        action: 'project_external_click',
        category: 'outbound',
        label: `${slug}_${type}`,
      });
    },
  },
  
  contact: {
    form_submit: () => {
      trackEvent({
        action: 'contact_form_submit',
        category: 'engagement',
      });
    },
    cv_download: () => {
      trackEvent({
        action: 'cv_download',
        category: 'engagement',
      });
    },
  },
};