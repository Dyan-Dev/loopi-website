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
    title: 'Visual Builder',
    description: 'Drag‑and‑drop workflows with clear data flow—no code required.',
    link: '/docs#visual-editor',
  },
  {
    icon: Variable,
    title: 'Typed Variables',
    description: 'Auto‑typed data for safer, clearer pipelines and fewer runtime surprises.',
    link: '/docs#variables',
  },
  {
    icon: MousePointer,
    title: 'Real Browser Control',
    description: 'Real browser control for reliable interaction on dynamic sites.',
    link: '/docs#selector-picker',
  },
  {
    icon: Plug,
    title: 'API + Browser',
    description: 'Mix API nodes with on‑screen actions to fetch, transform, and drive the UI.',
    link: '/docs#api-integration',
  },
  {
    icon: GitBranch,
    title: 'Local‑First Execution',
    description: 'Workflows run on your machine—no cloud lock‑in, offline friendly.',
    link: '/docs',
  },
  {
    icon: Package,
    title: 'Open‑Source & Cross‑Platform',
    description: 'TypeScript codebase with installers for Windows, macOS, and Linux.',
    link: '/downloads',
  },
];

export function FeatureGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Why Loopi</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center">
              Local‑first automation that blends a visual builder, typed data, APIs, and real browser control
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