import Head from 'next/head';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function PlayCountPage() {
  return (
    <div className="playcount-page section">
      <Head>
        <title>PlayCount App</title>
        <meta name="description" content="Discover your most played songs, albums and artists with the PlayCount app." />
      </Head>
      <header className="playcount-header">
        <img src="/assets/playcount/playcounticon.png" alt="PlayCount Icon" className="squircle-icon large-icon" />
        <h1>PlayCount</h1>
      </header>
      <div className="app-store-section">
        <a href="https://apps.apple.com/us/app/playcount-listening-stats/id6744829166" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Download-on-the-App-Store/US/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" alt="Download on the App Store" className="app-store-badge-large" />
        </a>
      </div>
      <p>Discover your most played songs, albums, and artists with PlayCount! Dive deep into your Apple Music library and see which tracks have been on repeat, which albums you love most, and which artists define your taste.</p>
      <div className="screenshot-gallery">
        <img src="/assets/playcount/playCountTopSongs.jpeg" alt="Top Songs View" />
        <img src="/assets/playcount/playCountTopAlbums.jpeg" alt="Top Albums View" />
        <img src="/assets/playcount/playCountArtist.jpeg" alt="Artist Stats View" />
        <img src="/assets/playcount/playCountAlbum.jpeg" alt="Album Details View" />
      </div>
      <div className="action-buttons">
        <a href="https://github.com/nadavital/PlayCount" target="_blank" rel="noopener noreferrer" className="clean-button github-button">
          <FaGithub />
          View on GitHub
        </a>
        <Link href="/playcount/privacy-policy" className="clean-button">Privacy Policy</Link>
      </div>
    </div>
  );
}
