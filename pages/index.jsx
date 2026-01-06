import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nadav Avital</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Prefetch app page images */}
        <link rel="prefetch" href="/assets/playcount/playcounticon.png" as="image" />
        <link rel="prefetch" href="/assets/playcount/playCountTopSongs.jpeg" as="image" />
        <link rel="prefetch" href="/assets/playcount/playCountTopAlbums.jpeg" as="image" />
        <link rel="prefetch" href="/assets/playcount/playCountArtist.jpeg" as="image" />
        <link rel="prefetch" href="/assets/playcount/playCountAlbum.jpeg" as="image" />
        <link rel="prefetch" href="/assets/cauldron/cauldronicon.png" as="image" />
        <link rel="prefetch" href="/assets/cauldron/cook_tab.PNG" as="image" />
        <link rel="prefetch" href="/assets/cauldron/recipe_view.PNG" as="image" />
        <link rel="prefetch" href="/assets/cauldron/generate_recipe.PNG" as="image" />
        <link rel="prefetch" href="/assets/cauldron/explore_tab.PNG" as="image" />
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
