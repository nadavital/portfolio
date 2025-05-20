import Head from 'next/head';
import Link from 'next/link';
import '../../src/styles/PlayCountPage.css';

export default function PrivacyPolicyPage() {
  return (
    <div className="playcount-page section">
      <Head>
        <title>PlayCount Privacy Policy</title>
        <meta name="description" content="Privacy policy for the PlayCount app." />
      </Head>
      <header className="playcount-header">
        <h1>Privacy Policy</h1>
      </header>
      <section className="privacy-policy">
        <p><strong>Effective Date:</strong> April 18, 2025</p>
        <p>PlayCount respects your privacy. This app is designed to prioritize user privacy and data security. Below is a clear explanation of how your information is handled:</p>
        <h3>1. Data Collection</h3>
        <p>PlayCount does not collect, store, or transmit any personal data to external servers. All app functionality operates locally on your device.</p>
        <p>Specifically:</p>
        <ul>
          <li>The app accesses your Apple Music library metadata (such as song titles, artists, albums, and play counts) using the MediaPlayer framework.</li>
          <li>No data is ever sent off your device.</li>
        </ul>
        <h3>2. Data Usage</h3>
        <p>The data accessed from your device is used solely to display listening statistics within the app. None of this data is shared or transmitted elsewhere.</p>
        <h3>3. Data Security</h3>
        <p>Because PlayCount does not transmit or store your personal data, there is no risk of your Apple Music information being leaked from the app.</p>
        <h3>4. Third-Party Services</h3>
        <p>PlayCount does not integrate with any advertising or analytics platforms that collect personal data.</p>
        <h3>5. Changes to This Privacy Policy</h3>
        <p>If any changes are made to how PlayCount handles data, this Privacy Policy will be updated accordingly, and the updated version will be made available in the GitHub repository.</p>
        <h3>6. Contact</h3>
        <p>If you have any questions about this Privacy Policy, you can contact the developer:</p>
        <ul>
          <li><strong>Developer:</strong> Nadav Avital</li>
          <li><strong>Email:</strong> nadav.avital@icloud.com</li>
        </ul>
      </section>
      <div className="action-buttons">
        <Link href="/playcount" className="clean-button">Back to PlayCount</Link>
      </div>
    </div>
  );
}
