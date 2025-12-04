import { Github, MessageCircle, Shield, Heart } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About & Community — Loopi';
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">About Loopi</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center">
            An open source project building the most accessible browser automation platform for everyone
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
            We believe browser automation should be accessible to everyone, not just developers. Loopi makes it possible to build complex automations visually, without writing code.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400">
            By combining an intuitive visual editor with the power of real browser automation, we're democratizing a technology that has historically been complex and expensive.
          </p>
        </div>
      </section>

      {/* Community */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-10 sm:py-12 md:py-16 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-10 md:mb-12">Join Our Community</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <a
              href="https://github.com/Dyan-Dev/loopi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 bg-white dark:bg-neutral-950 rounded-lg md:rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
            >
              <Github className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400 mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-base sm:text-lg mb-1.5 sm:mb-2">GitHub</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                View source code, report issues, and contribute
              </p>
            </a>

            <a
              href="https://discord.gg/B8SwwcGh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
            >
              <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg mb-2">Discord</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Chat with the community and get real-time help
              </p>
            </a>

            <a
              href="https://github.com/Dyan-Dev/loopi/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
            >
              <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg mb-2">Discussions</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Ask questions and share workflows
              </p>
            </a>

            <a
              href="https://github.com/Dyan-Dev/loopi/security"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
            >
              <Shield className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg mb-2">Security</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Report security vulnerabilities responsibly
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contributing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-center mb-12">Contributing</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
            <h3 className="text-lg mb-3">Contribution Guidelines</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              We welcome contributions of all kinds:
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• <strong>Code:</strong> Bug fixes, new features, and optimizations</li>
              <li>• <strong>Documentation:</strong> Tutorials, guides, and API docs</li>
              <li>• <strong>Design:</strong> UI/UX improvements and icons</li>
              <li>• <strong>Testing:</strong> Bug reports and test cases</li>
              <li>• <strong>Community:</strong> Help others and share workflows</li>
            </ul>
            <a
              href="https://github.com/Dyan-Dev/loopi/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary-600 dark:text-primary-400 underline"
            >
              Read Contributing Guide →
            </a>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
            <h3 className="text-lg mb-3">Code of Conduct</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              We're committed to fostering an inclusive and welcoming community. All participants are expected to:
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
              <li>• Be respectful and considerate</li>
              <li>• Welcome newcomers and help them learn</li>
              <li>• Focus on what's best for the community</li>
              <li>• Show empathy towards others</li>
            </ul>
            <a
              href="https://github.com/Dyan-Dev/loopi/blob/main/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-primary-600 dark:text-primary-400 underline"
            >
              Read Code of Conduct →
            </a>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
            <h3 className="text-lg mb-3">Development Setup</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Get started contributing in minutes:
            </p>
            <pre className="text-xs p-4 rounded bg-white dark:bg-neutral-950 overflow-x-auto border border-neutral-200 dark:border-neutral-800">
              <code>
                {`# Fork and clone the repository
git clone https://github.com/Dyan-Dev/loopi.git
cd loopi

# Install dependencies
pnpm install

# Start development server
pnpm start

# Run tests
pnpm test

# Create a branch for your feature
git checkout -b feature/my-feature`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="p-8 rounded-2xl bg-linear-to-br from-primary-600 to-primary-700 text-white text-center">
          <Heart className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-white mb-4">Support Open Source</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-primary-100 mb-6 text-center">
              Loopi is free and open source. If you find it useful, consider sponsoring the project or contributing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sponsors/Dyan-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-colors"
            >
              Become a Sponsor
            </a>
            <a
              href="https://github.com/Dyan-Dev/loopi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
