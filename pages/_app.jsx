import '../src/index.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.variable}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </div>
  );
}
