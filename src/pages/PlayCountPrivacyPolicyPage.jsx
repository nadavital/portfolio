import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicyPage() {
  return (
    <div className="playcount-page section">
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
          <li>This information is only used within the app to generate your personal listening statistics.</li>
          <li>PlayCount does not access any other personal information beyond what is necessary to display your top-played content.</li>
        </ul>

        <h3>2. Data Usage</h3>
        <p>The information retrieved from your device’s Apple Music library is:</p>
        <ul>
          <li>Used solely to display your personal play count statistics within the app.</li>
          <li>Not shared with third parties.</li>
          <li>Not uploaded, stored externally, or analyzed outside your device.</li>
        </ul>

        <h3>3. Third-Party Services</h3>
        <p>PlayCount does not use any third-party analytics services, advertising networks, or external data storage.</p>

        <h3>4. User Control</h3>
        <p>Since all data remains on your device:</p>
        <ul>
          <li>You have full control over your information.</li>
          <li>Deleting the app will remove all associated local data.</li>
        </ul>

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
        <Link to="/playcount" className="clean-button">Back to PlayCount</Link>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
