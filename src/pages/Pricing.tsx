import { PricingTable } from '../components/PricingTable';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { useEffect } from 'react';
import { Link } from 'react-router';

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing — Automa';
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Pricing Plans</h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center">
            Choose the plan that fits your needs. Start free with open source, upgrade anytime.
          </p>
        </div>
      </section>

      <PricingTable />
      <ComparisonMatrix />

      {/* Licensing & Legal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">Licensing Terms</h2>
          
          <div className="space-y-8">
            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
              <h3 className="text-lg mb-3">Open Source Reference Edition</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Licensed under the MIT License. You're free to use, modify, and distribute the software for any purpose, including commercial use, as long as you include the original copyright notice.
              </p>
              <a
                href="https://github.com/automa-dev/automa/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 underline"
              >
                Read full MIT License
              </a>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
              <h3 className="text-lg mb-3">Enterprise Edition</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Commercial license with additional terms for support, SLA, and enterprise features. Includes:
              </p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2 mb-4">
                <li>• Perpetual license with annual maintenance</li>
                <li>• Option to purchase source code escrow</li>
                <li>• Volume licensing discounts available</li>
                <li>• Custom terms for OEM and MSP partners</li>
              </ul>
              <Link to="/terms" className="text-sm text-primary-600 dark:text-primary-400 underline">
                Read Enterprise EULA
              </Link>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
              <h3 className="text-lg mb-3">Support & Maintenance</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                All Enterprise plans include ongoing software updates, security patches, and technical support as specified in each tier. Annual maintenance renewal required to maintain access to updates and support.
              </p>
            </div>

            <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
              <h3 className="text-lg mb-3">Data & Privacy</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                Automa is designed with privacy in mind:
              </p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
                <li>• <strong>Open Source Edition:</strong> Runs entirely on your machine. No data sent to our servers.</li>
                <li>• <strong>Enterprise Cloud:</strong> Data stored in SOC 2 compliant infrastructure with encryption at rest and in transit.</li>
                <li>• <strong>Enterprise On-Prem:</strong> Complete data sovereignty. Your data never leaves your infrastructure.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-8 rounded-2xl bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary-200 dark:border-primary-800 text-center">
          <h2 className="mb-4">Questions about pricing?</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Our team is here to help you find the right plan
          </p>
          <Link
            to="/enterprise"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
