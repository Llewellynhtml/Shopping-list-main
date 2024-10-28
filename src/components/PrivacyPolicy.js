import React from "react";
import './PrivacyPolicy.css';


const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy and Data Protection Policy</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal information. This policy explains what data we collect, how it’s used, and how we ensure your privacy.
        </p>
      </section>

      <section>
        <h2>Data Collection</h2>
        <ul>
          <li>
            <strong>Account Information:</strong> We collect your name, email, and password for login and managing your shopping lists.
          </li>
          <li>
            <strong>Shopping Data:</strong> We store shopping items (name, quantity, notes) and list details you add.
          </li>
          <li>
            <strong>Device Information:</strong> Basic device data is collected to improve app performance.
          </li>
        </ul>
      </section>

      <section>
        <h2>Data Usage</h2>
        <ul>
          <li>Your data is used to provide, sync, and manage your shopping lists across devices.</li>
          <li>We may use local storage for offline access, allowing you to use the app without an internet connection.</li>
        </ul>
      </section>

      <section>
        <h2>Data Security</h2>
        <ul>
          <li>
            <strong>Encryption:</strong> Your passwords and sensitive data are encrypted.
          </li>
          <li>
            <strong>Secure Storage:</strong> Data is securely stored on our servers and synced when online.
          </li>
          <li>
            <strong>Authentication:</strong> We use secure methods to protect your account and data.
          </li>
        </ul>
      </section>

      <section>
        <h2>Sharing</h2>
        <ul>
          <li>We only share data when you explicitly share lists with others.</li>
          <li>We comply with legal requests for data disclosure if required by law.</li>
        </ul>
      </section>

      <section>
        <h2>User Rights</h2>
        <ul>
          <li>
            <strong>Access and Update:</strong> You can view and edit your data anytime.
          </li>
          <li>
            <strong>Delete:</strong> You can delete your account and data from our system.
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          If you have any questions about privacy, please contact us at: <a href="mailto:support@yourappdomain.com">support@yourappdomain.com</a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
