import { Link } from 'react-router';
import {
  Workflow,
  GitBranch,
  Variable,
  MousePointer,
  Plug,
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
    icon: Package,
    title: 'Cross-Platform',
    description: 'Deploy on Windows, macOS, and Linux with native installers and packages.',
    link: '/downloads',
  },
];

export function FeatureGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Why Automa</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center">
              Powerful features that make browser automation accessible to everyone
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                to={feature.link}
                className="group p-5 sm:p-6 rounded-lg md:rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-100 dark:bg-primary-950/50 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-base sm:text-lg mb-1.5 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
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