import { Link } from 'react-router';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Open Source',
    price: 'Free',
    period: 'forever',
    description: 'Full-featured editor for individual developers',
    features: [
      'Visual node editor',
      'Unlimited automations',
      'Community support',
      'GitHub repository access',
      'Regular updates',
      'MIT License',
    ],
    cta: 'Get Started',
    ctaLink: '/open-source',
    popular: false,
  },
  {
    name: 'Team',
    price: '$99',
    period: 'per month',
    yearlyPrice: '$1,000/year',
    description: 'For small teams getting started with automation',
    features: [
      'Everything in Open Source',
      '5 seats included',
      'Email support',
      'Monthly updates',
      'Team collaboration',
      'Basic analytics',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/enterprise',
    popular: false,
  },
  {
    name: 'Business',
    price: '$499',
    period: 'per month',
    description: 'For growing teams with advanced needs',
    features: [
      'Everything in Team',
      '25 seats included',
      'Priority email support',
      'Single Sign-On (SAML/OIDC)',
      'Private releases',
      'Advanced analytics',
      'Custom integrations',
    ],
    cta: 'Request Demo',
    ctaLink: '/enterprise',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For organizations with mission-critical workflows',
    features: [
      'Everything in Business',
      'Unlimited seats',
      '24/7 phone & email support',
      'Dedicated account manager',
      'On-premise deployment',
      '99.9% SLA',
      'White-glove migration',
      'Custom features',
    ],
    cta: 'Contact Sales',
    ctaLink: '/enterprise',
    popular: false,
  },
];

export function PricingTable() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Simple, transparent pricing for teams and enterprises</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-neutral-600 dark:text-neutral-400 text-center">
              Start with open source for free, upgrade when you need support and enterprise features
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-primary-600 text-white shadow-2xl scale-105'
                  : 'bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary-600 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-2xl mb-2 ${plan.popular ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : ''}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                {plan.yearlyPrice && (
                  <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-neutral-500 dark:text-neutral-400'}`}>
                    or {plan.yearlyPrice}
                  </p>
                )}
                <p className={`mt-4 text-sm ${plan.popular ? 'text-white/90' : 'text-neutral-600 dark:text-neutral-400'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-neutral-600 dark:text-neutral-400'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.ctaLink}
                className={`block w-full text-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-white text-primary-600 hover:bg-neutral-100'
                    : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:text-white dark:hover:bg-primary-600'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>
            All paid plans include a 14-day free trial. No credit card required.{' '}
            <Link to="/pricing" className="underline">
              View detailed comparison
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
