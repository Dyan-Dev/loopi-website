import { Link } from 'react-router';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-primary-600 dark:text-accent-400 mb-8">Terms of Service</h1>
        
        <div className="prose prose-primary dark:prose-invert max-w-none">
          <p className="text-neutral-600 dark:text-neutral-400">
            <strong>Last Updated:</strong> November 30, 2025
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Automa's website, software, or services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            Automa provides free, open source visual browser automation software licensed under the Mozilla Public License 2.0 (MPL-2.0).
          </p>

          <h2>3. License Terms</h2>
          <p>
            Automa is licensed under the MPL-2.0 license. You may use, modify, and distribute the software in accordance with the terms of that license. The full license text is available in the software repository.
          </p>

          <h2>4. Acceptable Use</h2>
          <p>You agree NOT to use Automa to:</p>
          <ul>
            <li>Violate any laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Perform unauthorized access to computer systems (hacking)</li>
            <li>Bypass security measures or rate limits of third-party services</li>
            <li>Scrape data in violation of website terms of service</li>
            <li>Generate spam or conduct phishing attacks</li>
            <li>Distribute malware or harmful code</li>
            <li>Engage in any activity that harms Automa or third parties</li>
          </ul>

          <h2>5. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Ensuring your use of Automa complies with applicable laws and third-party terms</li>
            <li>Obtaining necessary permissions before automating interactions with third-party services</li>
            <li>Maintaining the security of your automation scripts and credentials</li>
            <li>Any content created or actions performed using Automa</li>
          </ul>

          <h2>6. Intellectual Property</h2>
          <p>
            Except for the Open Source Edition (which is licensed under MPL-2.0), all rights, title, and interest in Automa, including all intellectual property rights, belong to Automa and its licensors.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            Automa may integrate with third-party services and websites. Your use of such services is subject to their respective terms of service. We are not responsible for third-party services.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Your use of our services is also governed by our{' '}
            <Link to="/privacy" className="text-primary-600 dark:text-accent-400 hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>

          <h2>9. Disclaimers and Warranties</h2>
          <p>
            <strong>THE SOFTWARE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.</strong> We disclaim all warranties, express or implied, including but not limited to:
          </p>
          <ul>
            <li>Warranties of merchantability and fitness for a particular purpose</li>
            <li>Warranties of non-infringement</li>
            <li>Warranties regarding accuracy, reliability, or availability</li>
          </ul>
          <p>
            We do not guarantee that the software will be error-free, secure, or uninterrupted.
          </p>

          <h2>10. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOMA SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p>
            Our total liability to you for all claims arising out of or relating to these Terms or your use of Automa shall not exceed the amount you paid us in the 12 months preceding the claim.
          </p>

          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Automa and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
          </p>
          <ul>
            <li>Your use of Automa</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of third parties</li>
          </ul>

          <h2>12. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice. Your rights under the MPL-2.0 license continue as permitted by that license.
          </p>

          <h2>13. Modifications to Terms</h2>
          <p>
            We may modify these Terms at any time. We will notify you of material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of Automa after such changes constitutes acceptance of the new Terms.
          </p>

          <h2>14. Export Compliance</h2>
          <p>
            Automa may be subject to export control laws. You agree to comply with all applicable export and import laws and regulations in your use of the software.
          </p>

          <h2>15. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of Automa shall be resolved through:
          </p>
          <ul>
            <li>Good faith negotiation between the parties</li>
            <li>Binding arbitration if negotiation fails</li>
            <li>Litigation only as permitted by applicable law</li>
          </ul>

          <h2>16. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
          </p>

          <h2>17. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and any applicable license agreements, constitute the entire agreement between you and Automa regarding your use of our services.
          </p>

          <h2>18. Contact Information</h2>
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <ul>
            <li>Email: legal@automa.site</li>
            <li>GitHub: <a href="https://github.com/automa/automa" target="_blank" rel="noopener noreferrer">github.com/automa/automa</a></li>
          </ul>

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-neutral-600 dark:text-neutral-400">
              <Link to="/privacy" className="text-primary-600 dark:text-accent-400 hover:underline">
                Privacy Policy
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
