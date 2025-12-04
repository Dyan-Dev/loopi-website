import { Link } from 'react-router';
import { Github, Download, BookOpen, Code, GitFork, Star } from 'lucide-react';
import { useEffect } from 'react';

export default function OpenSource() {
  useEffect(() => {
    document.title = 'Features — Loopi';
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-950/50 text-accent-700 dark:text-accent-400 text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            Open Source · Free Forever
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Visual Browser Automation</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 text-center">
            Free, open source browser automation tool with a visual editor and community support. Perfect for developers, testers, and automation enthusiasts.</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a
              href="https://github.com/Dyan-Dev/loopi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View on GitHub
            </a>
            <Link
              to="/downloads"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Download Installers
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Read Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-10 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">What's Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Code,
                title: 'Full Visual Editor',
                description: 'Complete node-based automation builder with all core features',
              },
              {
                icon: GitFork,
                title: 'Unlimited Workflows',
                description: 'Create and run as many automation workflows as you need',
              },
              {
                icon: Download,
                title: 'Cross-Platform',
                description: 'Native installers for Windows, macOS, and Linux',
              },
              {
                icon: Github,
                title: 'Open Source Code',
                description: 'Full access to source code. Modify, fork, and contribute',
              },
              {
                icon: Star,
                title: 'Community Support',
                description: 'Active community on GitHub Discussions and Discord',
              },
              {
                icon: BookOpen,
                title: 'Documentation',
                description: 'Comprehensive guides, tutorials, and API reference',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
                  <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">Join the Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg md:rounded-xl">
            <Github className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg sm:text-xl mb-3">Contribute on GitHub</h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">
              Help improve Loopi by contributing code, reporting bugs, or suggesting features. All contributions are welcome!
            </p>
            <a
              href="https://github.com/Dyan-Dev/loopi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline"
            >
              View Repository →
            </a>
          </div>

          <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 rounded-lg md:rounded-xl">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-primary-600 dark:text-primary-400 mb-4" />
            <h3 className="text-lg sm:text-xl mb-3">Get Help & Support</h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-4">
              Join our community discussions, ask questions, share workflows, and learn from other automation enthusiasts.
            </p>
            <a
              href="https://github.com/Dyan-Dev/loopi/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline"
            >
              Join Discussions →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
