import { Github, MessageCircle, Shield, Heart } from 'lucide-react';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = 'About & Community — Automa';
  }, []);

  return (
    <div className="py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">About Automa</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            An open source project building the most accessible browser automation platform for everyone
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Our Mission</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            We believe browser automation should be accessible to everyone, not just developers. Automa makes it possible to build complex automations visually, without writing code.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            By combining an intuitive visual editor with the power of real browser automation, we're democratizing a technology that has historically been complex and expensive.
          </p>
        </div>
      </section>

      {/* Community */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Join Our Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a
              href="https://github.com/automa-dev/automa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
            >
              <Github className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg mb-2">GitHub</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                View source code, report issues, and contribute
              </p>
            </a>

            <a
              href="https://discord.gg/automa"
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
              href="https://github.com/automa-dev/automa/discussions"
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
              href="https://github.com/automa-dev/automa/security"
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
              href="https://github.com/automa-dev/automa/blob/main/CONTRIBUTING.md"
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
              href="https://github.com/automa-dev/automa/blob/main/CODE_OF_CONDUCT.md"
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
git clone https://github.com/YOUR_USERNAME/automa.git
cd automa

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

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
          <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Automa is free and open source. If you find it useful, consider sponsoring the project or contributing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/sponsors/automa-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-colors"
            >
              Become a Sponsor
            </a>
            <a
              href="https://github.com/automa-dev/automa"
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
