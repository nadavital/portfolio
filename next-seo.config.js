const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nadavavital.com';

export default {
  title: 'Nadav Avital | Software Engineer',
  description: 'Nadav Avital - Software engineer at eBay, building iOS apps and exploring AI-powered experiences.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Nadav Avital',
  },
  twitter: {
    cardType: 'summary',
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
