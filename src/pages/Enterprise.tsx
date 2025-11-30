import { Shield, Users, Building, Clock, Lock, Headphones, Award, Zap } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';
import { useEffect } from 'react';

export default function Enterprise() {
  useEffect(() => {
    document.title = 'Enterprise Edition — Automa';
    
    // Add JSON-LD structured data for enterprise product
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Automa Enterprise Edition',
      description: 'Enterprise browser automation with support, SLA, SSO, and on-premise deployment',
      brand: {
        '@type': 'Brand',
        name: 'Automa',
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Team Plan',
          price: '99',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '99',
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
        },
        {
          '@type': 'Offer',
          name: 'Business Plan',
          price: '499',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '499',
            priceCurrency: 'USD',
            unitText: 'MONTH',
          },
        },
      ],
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const enterpriseFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Support & SLA',
      description: '24/7 phone and email support with guaranteed response times and 99.9% uptime SLA',
    },
    {
      icon: Lock,
      title: 'Single Sign-On (SSO)',
      description: 'SAML and OIDC integration with your identity provider (Azure AD, Okta, etc.)',
    },
    {
      icon: Building,
      title: 'On-Premise Deployment',
      description: 'Self-hosted installer and appliance for complete data sovereignty and air-gapped networks',
    },
    {
      icon: Users,
      title: 'Centralized Management',
      description: 'Admin console for user management, permissions, credential vault, and usage analytics',
    },
    {
      icon: Headphones,
      title: 'Dedicated Account Manager',
      description: 'Personal point of contact for onboarding, training, and ongoing strategic support',
    },
    {
      icon: Zap,
      title: 'Priority Features',
      description: 'Fast-track feature requests and custom integrations for your unique workflows',
    },
    {
      icon: Clock,
      title: 'White-Glove Migration',
      description: 'Expert assistance migrating from legacy tools and setting up best practices',
    },
    {
      icon: Award,
      title: 'Custom Licensing',
      description: 'Flexible licensing terms for large deployments, MSPs, and OEM partnerships',
    },
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950/50 text-primary-700 dark:text-primary-400 text-xs sm:text-sm mb-4 sm:mb-6">
            Enterprise Grade
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Enterprise Edition</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 text-center">
            Support, SLA, SSO, on-premise installs, and white-glove onboarding for teams and mission-critical workflows.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-10 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">Enterprise Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {enterpriseFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="p-5 sm:p-6 bg-white dark:bg-neutral-950 rounded-lg md:rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg mb-1.5 sm:mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">Built for Enterprise Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="p-5 sm:p-6 rounded-lg md:rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-base sm:text-lg mb-2 sm:mb-3">Financial Services</h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
              Automate compliance reporting, data extraction from legacy systems, and regulatory submissions with audit trails.
            </p>
            <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 space-y-1.5 sm:space-y-2">
              <li>• SOC 2 compliance</li>
              <li>• On-premise deployment</li>
              <li>• Audit logging</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg mb-3">Healthcare & Life Sciences</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Integrate with EHR systems, automate patient data workflows, and maintain HIPAA compliance.
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• HIPAA compliant</li>
              <li>• Data residency controls</li>
              <li>• SSO integration</li>
            </ul>
          </div>
          
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg mb-3">E-commerce & Retail</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Monitor competitor pricing, automate product catalog updates, and test checkout flows at scale.
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• High-volume automation</li>
              <li>• Proxy & geo support</li>
              <li>• Performance SLAs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Security & Compliance</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Enterprise-grade security and compliance certifications
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['SOC 2 Type II', 'GDPR', 'HIPAA', 'ISO 27001'].map((cert) => (
              <div key={cert} className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <p className="font-semibold">{cert}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Compliant</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="mb-4">Request a Demo</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            See Automa Enterprise in action. We'll reach out within 24 hours.
          </p>
        </div>
        <LeadForm />
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "What's the difference between Open Source and Enterprise?",
              a: 'The Open Source edition includes the full visual editor and all core automation features. Enterprise adds support SLAs, SSO, on-premise deployment, centralized credential management, and dedicated account management.',
            },
            {
              q: 'Can we self-host Automa Enterprise?',
              a: 'Yes! Enterprise customers can deploy Automa on their own infrastructure using our self-hosted installer or pre-configured appliance. We support Docker, Kubernetes, and traditional VM deployments.',
            },
            {
              q: 'What kind of support is included?',
              a: 'Team plans include email support with 48h response time. Business plans add priority support with 24h response. Enterprise includes 24/7 phone and email with 4h response times and a dedicated account manager.',
            },
            {
              q: 'Do you offer professional services?',
              a: 'Yes. We offer migration services, custom integrations, training workshops, and ongoing consulting. Contact our sales team for details.',
            },
          ].map((faq) => (
            <details key={faq.q} className="group p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                {faq.q}
                <span className="text-neutral-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}