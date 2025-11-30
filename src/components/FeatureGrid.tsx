import { Link } from 'react-router';
import {
  Workflow,
  GitBranch,
  Variable,
  MousePointer,
  Plug,
  Clock,
  Lock,
  Package,
} from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'Visual Editor',
    description: 'Build automation flows with an intuitive node-based interface. No coding required.',
    link: '/docs#visual-editor',
  },
  {
    icon: GitBranch,
    title: 'Conditional Logic',
    description: 'Add if/else branches, loops, and error handling to create robust automations.',
    link: '/docs#conditional-logic',
  },
  {
    icon: Variable,
    title: 'Variables & Loops',
    description: 'Store data in variables and iterate through arrays with powerful loop controls.',
    link: '/docs#variables',
  },
  {
    icon: MousePointer,
    title: 'Selector Picker',
    description: 'Click to pick elements from a live page. Never write CSS selectors again.',
    link: '/docs#selector-picker',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Connect to REST APIs, webhooks, and external services seamlessly.',
    link: '/docs#api-integration',
  },
  {
    icon: Clock,
    title: 'Scheduled Runs',
    description: 'Schedule automations to run at specific times or intervals automatically.',
    link: '/docs#scheduling',
  },
  {
    icon: Lock,
    title: 'Credential Vault',
    description: 'Store API keys and passwords securely with enterprise-grade encryption.',
    link: '/docs#credentials',
  },
  {
    icon: Package,
    title: 'Cross-Platform',
    description: 'Deploy on Windows, macOS, and Linux with native installers and packages.',
    link: '/downloads',
  },
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Automa</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-neutral-600 dark:text-neutral-400 text-center">
              Powerful features that make browser automation accessible to everyone
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                to={feature.link}
                className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-950/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}