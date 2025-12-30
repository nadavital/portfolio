import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nadav Avital</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="minimal-page">
        <h1>Nadav Avital</h1>

        <nav className="apps">
          <Link href="/playcount" className="link-playcount">PlayCount</Link>
          <Link href="/cauldron" className="link-cauldron">Cauldron</Link>
        </nav>

        <p className="experience">Software Engineer on Checkout at eBay</p>
        <p className="experience-sub">Previously Anodot · UCSB CS '24</p>

        <nav className="links">
          <a href="https://github.com/nadavital" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://linkedin.com/in/nadavital" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:nadav.avital@icloud.com">email</a>
          <a href="/assets/NadavResume.pdf" target="_blank" rel="noopener noreferrer">resume</a>
        </nav>
      </main>
    </>
  );
}
