import type { Metadata } from 'next';

const defaultMetadata = {
  title: 'Fernando Torres - ALM Research & Stanford MSx',
  description:
    'Stanford MSx researcher investigating Autonomous Language Models (ALMs) and healthcare executive turned tech-focused founder.',
  url: 'https://fernandotn.github.io',
  siteName: 'Fernando Torres',
  locale: 'en_US',
  type: 'website',
  image: '/og-image.png',
  twitterHandle: '@FernandoTN',
};

export function constructMetadata({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  image = defaultMetadata.image,
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    keywords: [
      'Autonomous Language Models',
      'ALM',
      'Stanford MSx',
      'AI Research',
      'Healthcare Technology',
      'Business Development',
      'Fernando Torres',
    ],
    authors: [
      {
        name: 'Fernando Torres',
        url: defaultMetadata.url,
      },
    ],
    creator: 'Fernando Torres',
    publisher: 'Fernando Torres',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: defaultMetadata.type as 'website',
      locale: defaultMetadata.locale,
      url: defaultMetadata.url,
      title,
      description,
      siteName: defaultMetadata.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: defaultMetadata.twitterHandle,
    },
    icons,
    metadataBase: new URL(defaultMetadata.url),
    alternates: {
      canonical: defaultMetadata.url,
      types: {
        'application/rss+xml': [
          {
            url: `${defaultMetadata.url}/rss.xml`,
            title: `${defaultMetadata.siteName} Blog`,
          },
        ],
      },
    },
  };
}
