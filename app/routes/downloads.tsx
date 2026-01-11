import { Download, Github, Apple, Monitor, Package } from 'lucide-react';
import { useEffect } from 'react';

const platforms = [
  {
    name: 'Windows',
    icon: Monitor,
    downloads: [
      { type: 'Installer (.exe)', size: '114 MB', url: 'https://github.com/Dyan-Dev/loopi/releases/download/v1.6.2/loopi-1.6.2.Setup.exe' },
    ],
    requirements: 'Windows 10 or later (64-bit)',
  },
  {
    name: 'Linux',
    icon: Package,
    downloads: [
      { type: 'Debian (.deb)', size: '82.7 MB', url: 'https://github.com/Dyan-Dev/loopi/releases/download/v1.6.2/loopi_1.6.2_amd64.deb' },
    ],
    requirements: 'Ubuntu 20.04+',
  },
];

export default function Downloads() {
  useEffect(() => {
    document.title = 'Downloads — Loopi';
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Download Loopi</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 text-center">
            Free and open source. Choose your platform and start automating.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="https://github.com/Dyan-Dev/loopi/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Latest Release Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h3 className="text-lg mb-1">Latest Release: v1.6.2</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Released January 11, 2026 · <a href="https://github.com/Dyan-Dev/loopi/releases/latest" target="_blank" rel="noopener noreferrer" className="underline">Release Notes</a>
              </p>
            </div>
            <div className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div>
                <span className="font-semibold">License:</span> MIT
              </div>
              <div>
                <span className="font-semibold">Size:</span> ~81-114 MB
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div key={platform.name} className="p-5 sm:p-6 bg-white dark:bg-neutral-950 rounded-lg md:rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-lg sm:text-xl">{platform.name}</h3>
                </div>
                
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-5 sm:mb-6">
                  {platform.requirements}
                </p>
                
                <div className="space-y-3">
                  {platform.downloads.map((download) => (
                    <a
                      key={download.type}
                      href={download.url}
                      className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all group"
                    >
                      <div>
                        <p className="text-sm font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400">
                          {download.type}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                          {download.size}
                        </p>
                      </div>
                      <Download className="w-5 h-5 text-neutral-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Checksums */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        <div className="p-5 sm:p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg md:rounded-xl">
          <h3 className="text-base sm:text-lg mb-3 sm:mb-4">Verify Downloads (SHA256 Checksums)</h3>
          <div className="overflow-x-auto -mx-5 sm:-mx-6 px-5 sm:px-6">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead className="text-left border-b border-neutral-300 dark:border-neutral-700">
                <tr>
                  <th className="pb-2 font-semibold">File</th>
                  <th className="pb-2 font-semibold">SHA256</th>
                </tr>
              </thead>
              <tbody className="text-neutral-600 dark:text-neutral-400">
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <td className="py-2 font-mono text-xs">loopi-1.6.2.Setup.exe</td>
                  <td className="py-2 font-mono text-xs">ecae25223f50900e049496ebfce6aed38d9b7fcf1484396e3d1cdb2a5a31a6d7</td>
                </tr>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <td className="py-2 font-mono text-xs">loopi_1.6.2_amd64.deb</td>
                  <td className="py-2 font-mono text-xs">adbcb6a9d1e23eb8d397e7070b786472754135170c193ce33f7f0aed59f3f1bd</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-4">
            Full checksums available on the{' '}
            <a href="https://github.com/Dyan-Dev/loopi/releases/latest" target="_blank" rel="noopener noreferrer" className="underline">
              GitHub Releases page
            </a>
          </p>
        </div>
      </section>

      {/* Alternative Install Methods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 text-center">Alternative Installation Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg mb-4">Build from Source</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Clone the repository and build locally:
            </p>
            <pre className="text-xs p-4 rounded bg-neutral-100 dark:bg-neutral-900 overflow-x-auto">
              <code>
                git clone https://github.com/Dyan-Dev/loopi.git{'\n'}
                cd loopi{'\n'}
                pnpm install{'\n'}
                pnpm start
              </code>
            </pre>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
            <h3 className="text-lg mb-4">Snap (Linux)</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Install via Snap package manager:
            </p>
            <pre className="text-xs p-4 rounded bg-neutral-100 dark:bg-neutral-900 overflow-x-auto">
              <code>sudo snap install loopi</code>
            </pre>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="mb-8 text-center">System Requirements</h2>
        <div className="max-w-3xl mx-auto p-6 bg-neutral-50 dark:bg-neutral-900 rounded-xl">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span><strong>Memory:</strong> Minimum 4 GB RAM (8 GB recommended)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span><strong>Disk Space:</strong> 500 MB for installation + additional space for browser cache</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span><strong>Display:</strong> 1280x720 or higher resolution</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span><strong>Internet:</strong> Required for initial setup and updates</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 dark:text-primary-400">•</span>
              <span><strong>Chromium:</strong> Bundled with the application (no separate installation needed)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Help */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary-200 dark:border-primary-800 text-center">
          <h2 className="mb-4">Need help installing?</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Check our documentation or reach out to the community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs#installation"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              Installation Guide
            </a>
            <a
              href="https://discord.gg/B8SwwcGh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
            >
              Get Help on Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
