const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nadavavital.com';

export default {
  title: 'Nadav Avital',
  description: 'Nadav Avital - Software engineer at eBay, building iOS apps and exploring AI-powered experiences.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Nadav Avital',
    images: [
      {
        url: `${siteUrl}/og-image.jpeg`,
        width: 1200,
        height: 1200,
        alt: 'Nadav Avital',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalJsonLd: {
    '@type': 'Person',
    name: 'Nadav Avital',
    url: siteUrl,
    sameAs: [
      'https://github.com/nadavital',
      'https://www.linkedin.com/in/nadavital',
    ],
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'eBay',
    },
    alumniOf: 'University of California, Santa Barbara',
  },
};
