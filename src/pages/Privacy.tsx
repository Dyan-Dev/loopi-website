import { Link } from 'react-router';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-primary-600 dark:text-accent-400 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-primary dark:prose-invert max-w-none">
          <p className="text-neutral-600 dark:text-neutral-400">
            <strong>Last Updated:</strong> November 30, 2025
          </p>

          <h2>Introduction</h2>
          <p>
            Automa ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Contact Information:</strong> When you fill out our enterprise contact form, we collect your name, email address, company name, and any message you provide.</li>
            <li><strong>Account Information:</strong> If you create an account for our community features, we collect your username, email, and password.</li>
          </ul>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li><strong>Usage Data:</strong> We collect information about your interactions with our website, including pages visited, time spent, and navigation patterns.</li>
            <li><strong>Device Information:</strong> We collect information about the device you use to access our website, including IP address, browser type, and operating system.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies. See our Cookie Policy section below.</li>
          </ul>

          <h3>Open Source Software</h3>
          <p>
            The Automa Open Source Reference Edition does not collect any personal data or telemetry. All automation runs locally on your machine.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Process enterprise license requests</li>
            <li>Send you updates about Automa (with your consent)</li>
            <li>Improve our website and software</li>
            <li>Analyze usage patterns and trends</li>
            <li>Detect and prevent fraud or abuse</li>
          </ul>

          <h2>Information Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our website and business</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>

          <h2>Cookie Policy</h2>
          <p>We use the following types of cookies:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
            <li><strong>Preference Cookies:</strong> Remember your settings (e.g., dark mode preference)</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the following rights:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal information</li>
            <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Data Portability:</strong> Request your data in a portable format</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our website and services are not intended for children under 13 years of age. We do not knowingly collect personal information from children.
          </p>

          <h2>International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
          </p>

          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <ul>
            <li>Email: privacy@automa.site</li>
            <li>GitHub: <a href="https://github.com/automa/automa" target="_blank" rel="noopener noreferrer">github.com/automa/automa</a></li>
          </ul>

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400">
              <Link to="/terms" className="text-primary-600 dark:text-accent-400 hover:underline">
                Terms of Service
              </Link>
              {' | '}
              <Link to="/" className="text-primary-600 dark:text-accent-400 hover:underline">
                Back to Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
