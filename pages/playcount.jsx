import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PlayCountPage() {
  return (
    <>
      <Head>
        <title>PlayCount — Apple Music Stats</title>
        <meta name="description" content="See your most played songs, albums and artists from Apple Music." />
      </Head>

      <main className="page page-playcount">
        <Link href="/" className="back-link">
          ← Back
        </Link>

        <header className="app-header">
          <Image
            src="/assets/playcount/playcounticon.jpg"
            alt=""
            width={80}
            height={80}
            className="app-icon-large"
            priority
          />
          <div>
            <h1>PlayCount</h1>
            <p className="app-tagline">Your Apple Music listening stats</p>
          </div>
        </header>

        <p className="app-description">
          See which songs, albums, and artists you've played the most —
          all the data Apple Music tracks but doesn't show you.
        </p>

        <a
          href="https://apps.apple.com/us/app/playcount-listening-stats/id6744829166"
          target="_blank"
          rel="noopener noreferrer"
          className="download-link"
        >
          Download
        </a>

        <div className="screenshots">
          <Image src="/assets/playcount/playCountTopSongs.jpeg" alt="Top Songs" width={1290} height={2796} sizes="(max-width: 600px) 50vw, 25vw" style={{ width: '100%', height: 'auto' }} />
          <Image src="/assets/playcount/playCountTopAlbums.jpeg" alt="Top Albums" width={1290} height={2796} sizes="(max-width: 600px) 50vw, 25vw" style={{ width: '100%', height: 'auto' }} />
          <Image src="/assets/playcount/playCountArtist.jpeg" alt="Artist Stats" width={1290} height={2796} sizes="(max-width: 600px) 50vw, 25vw" style={{ width: '100%', height: 'auto' }} />
          <Image src="/assets/playcount/playCountAlbum.jpeg" alt="Album Details" width={1290} height={2796} sizes="(max-width: 600px) 50vw, 25vw" style={{ width: '100%', height: 'auto' }} />
        </div>

        <div className="app-links">
          <a
            href="https://github.com/nadavital/PlayCount"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
          <Link href="/playcount/privacy-policy">
            Privacy Policy
          </Link>
        </div>

        <footer>
          © {new Date().getFullYear()} Nadav Avital
        </footer>
      </main>
    </>
  );
}
