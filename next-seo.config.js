const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nadavavital.com';

export default {
  title: 'Nadav Avital | Software Engineer',
  description: 'Portfolio of Nadav Avital, software engineer focusing on full-stack web development and user experiences.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Nadav Avital Portfolio',
    images: [
      {
        url: `${siteUrl}/assets/NadavPhoto.png`,
        alt: 'Nadav Avital',
      },
    ],
  },
  additionalJsonLd: {
    '@type': 'Person',
    name: 'Nadav Avital',
    url: siteUrl,
    sameAs: [
      'https://github.com/nadavital',
      'https://www.linkedin.com/in/nadavital',
    ],
    image: `${siteUrl}/assets/NadavPhoto.png`,
    jobTitle: 'Software Engineer',
    alumniOf: 'University of California, Santa Barbara',
  },
};
