import { Check, X } from 'lucide-react';

interface Feature {
  name: string;
  openSource: boolean | string;
  team: boolean | string;
  business: boolean | string;
  enterprise: boolean | string;
}

const features: Feature[] = [
  {
    name: 'Visual node editor',
    openSource: true,
    team: true,
    business: true,
    enterprise: true,
  },
  {
    name: 'Unlimited automations',
    openSource: true,
    team: true,
    business: true,
    enterprise: true,
  },
  {
    name: 'Number of seats',
    openSource: 'Unlimited',
    team: '5',
    business: '25',
    enterprise: 'Unlimited',
  },
  {
    name: 'Community support',
    openSource: true,
    team: true,
    business: true,
    enterprise: true,
  },
  {
    name: 'Email support',
    openSource: false,
    team: 'Standard',
    business: 'Priority',
    enterprise: '24/7',
  },
  {
    name: 'Phone support',
    openSource: false,
    team: false,
    business: false,
    enterprise: true,
  },
  {
    name: 'Response time SLA',
    openSource: false,
    team: '48h',
    business: '24h',
    enterprise: '4h',
  },
  {
    name: 'Single Sign-On (SAML/OIDC)',
    openSource: false,
    team: false,
    business: true,
    enterprise: true,
  },
  {
    name: 'On-premise deployment',
    openSource: false,
    team: false,
    business: false,
    enterprise: true,
  },
  {
    name: 'Centralized credentials vault',
    openSource: false,
    team: false,
    business: true,
    enterprise: true,
  },
  {
    name: 'Team collaboration',
    openSource: false,
    team: true,
    business: true,
    enterprise: true,
  },
  {
    name: 'Advanced analytics',
    openSource: false,
    team: false,
    business: true,
    enterprise: true,
  },
  {
    name: 'Custom integrations',
    openSource: false,
    team: false,
    business: true,
    enterprise: true,
  },
  {
    name: 'Dedicated account manager',
    openSource: false,
    team: false,
    business: false,
    enterprise: true,
  },
  {
    name: 'White-glove migration',
    openSource: false,
    team: false,
    business: false,
    enterprise: true,
  },
  {
    name: 'Custom features & development',
    openSource: false,
    team: false,
    business: false,
    enterprise: true,
  },
  {
    name: 'Uptime SLA',
    openSource: false,
    team: false,
    business: '99.5%',
    enterprise: '99.9%',
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="w-5 h-5 text-accent-500 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-neutral-300 dark:text-neutral-700 mx-auto" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonMatrix() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Feature Comparison</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Compare what's included in each plan
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-200 dark:border-neutral-800">
                <th className="text-left py-4 px-4 text-sm font-semibold">Feature</th>
                <th className="text-center py-4 px-4 text-sm font-semibold">Open Source</th>
                <th className="text-center py-4 px-4 text-sm font-semibold">Team</th>
                <th className="text-center py-4 px-4 text-sm font-semibold bg-primary-50 dark:bg-primary-950/20">
                  Business
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b border-neutral-200 dark:border-neutral-800 ${
                    index % 2 === 0 ? 'bg-neutral-50 dark:bg-neutral-900/50' : ''
                  }`}
                >
                  <td className="py-4 px-4 text-sm">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    <FeatureCell value={feature.openSource} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FeatureCell value={feature.team} />
                  </td>
                  <td className="py-4 px-4 text-center bg-primary-50/50 dark:bg-primary-950/10">
                    <FeatureCell value={feature.business} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <FeatureCell value={feature.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
