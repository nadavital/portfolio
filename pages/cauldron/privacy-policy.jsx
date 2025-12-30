import Head from 'next/head';
import Link from 'next/link';

export default function CauldronPrivacyPolicyPage() {
  return (
    <div className="page page-cauldron">
      <Head>
        <title>Cauldron Privacy Policy</title>
        <meta name="description" content="Privacy policy for the Cauldron app." />
      </Head>

      <Link href="/cauldron" className="back-link">
        ← Back
      </Link>

      <header>
        <h1 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}>Privacy Policy</h1>
      </header>

      <section style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        <p><strong>Effective Date:</strong> December 29, 2025</p>
        <p style={{ marginTop: '16px' }}>Cauldron respects your privacy. This policy explains how your information is handled.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>1. AI Recipe Generation</h3>
        <p>Cauldron uses Apple's on-device Foundation Models framework for AI features. All recipe generation happens entirely on your device — your prompts and generated content are never sent to external servers.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>2. Recipe Storage & Visibility</h3>
        <p>Your recipes are stored using Apple's CloudKit service:</p>
        <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
          <li><strong>Private recipes</strong> are stored in your personal iCloud account and are only visible to you.</li>
          <li><strong>Public recipes</strong> are stored in a shared database and are visible to all Cauldron users. Anyone can discover and view your public recipes.</li>
        </ul>
        <p style={{ marginTop: '8px' }}>Public recipes are not encrypted and can be viewed by anyone using the app.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>3. User Profiles</h3>
        <p>Your profile information (display name, profile photo, public recipes, and public collections) is visible to all Cauldron users. This allows others to discover your recipes and connect with you.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>4. Connections</h3>
        <p>When you connect with other users, this connection is stored in CloudKit. Your connections list may be visible to others.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>5. Data Collection</h3>
        <p>Cauldron does not collect analytics, track your activity, or share data with third-party advertisers. The app accesses only the data necessary for its features to function.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>6. Data Deletion</h3>
        <p>You can delete your recipes, collections, and account data at any time from within the app. Deleted data is removed from CloudKit.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>7. Changes to This Policy</h3>
        <p>If any changes are made to how Cauldron handles data, this Privacy Policy will be updated accordingly.</p>

        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text)', marginTop: '24px', marginBottom: '8px' }}>8. Contact</h3>
        <p>If you have any questions about this Privacy Policy, you can contact the developer:</p>
        <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
          <li><strong>Developer:</strong> Nadav Avital</li>
          <li><strong>Email:</strong> nadav.avital@icloud.com</li>
        </ul>
      </section>

      <footer style={{ marginTop: '48px' }}>
        © {new Date().getFullYear()} Nadav Avital
      </footer>
    </div>
  );
}
