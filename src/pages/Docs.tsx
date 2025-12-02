import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Search, BookOpen, Code, Zap, Box, FileCode } from 'lucide-react';

const docsSections = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    items: [
      { name: 'Installation', href: '#installation' },
      { name: 'Your First Workflow', href: '#first-workflow' },
      { name: 'Core Concepts', href: '#core-concepts' },
      { name: 'Node Types', href: '#node-types' },
    ],
  },
  {
    title: 'Features',
    icon: Zap,
    items: [
      { name: 'Visual Editor', href: '#visual-editor' },
      { name: 'Conditional Logic', href: '#conditional-logic' },
      { name: 'Variables & Loops', href: '#variables' },
      { name: 'Selector Picker', href: '#selector-picker' },
      { name: 'API Integration', href: '#api-integration' },
      { name: 'Scheduling', href: '#scheduling' },
      { name: 'Credentials', href: '#credentials' },
    ],
  },
  {
    title: 'Examples',
    icon: FileCode,
    items: [
      { name: 'Pagination Example', href: '#example-pagination' },
      { name: 'Variable Loop', href: '#example-variable-loop' },
      { name: 'Price Extraction', href: '#example-price-extraction' },
      { name: 'Form Filling', href: '#example-form-filling' },
    ],
  },
  {
    title: 'API Reference',
    icon: Code,
    items: [
      { name: 'IPC Bridge', href: '#ipc-bridge' },
      { name: 'Command Endpoints', href: '#command-endpoints' },
      { name: 'Step Plugins', href: '#step-plugins' },
      { name: 'Custom Nodes', href: '#custom-nodes' },
    ],
  },
];

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    document.title = 'Documentation — Automa';
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 md:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">Documentation</h1>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 text-center">
            Everything you need to build powerful browser automations
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
            />
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {docsSections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="p-6 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <h3 className="text-lg">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <nav className="space-y-6">
                {docsSections.map((section) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-semibold mb-2">{section.title}</h4>
                    <ul className="space-y-2 text-sm">
                      {section.items.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 prose prose-neutral dark:prose-invert max-w-none">
            <div id="installation" className="mb-16">
              <h2>Installation</h2>
              <p>
                Get started with Automa in minutes. Choose your installation method:
              </p>
              
              <h3>Desktop Application</h3>
              <p>Download the installer for your platform:</p>
              <ul>
                <li>Windows: <code>.exe</code> or <code>.msi</code></li>
                <li>macOS: <code>.dmg</code></li>
                <li>Linux: <code>.AppImage</code>, <code>.deb</code>, or <code>.rpm</code></li>
              </ul>
              <p>
                <Link to="/downloads">Download from our Downloads page →</Link>
              </p>

              <h3>npm Package</h3>
              <pre className="overflow-x-auto">
                <code className="text-xs sm:text-sm">{`npm install -g @automa/cli
automa --version`}</code>
              </pre>

              <h3>Build from Source</h3>
              <pre className="overflow-x-auto">
                <code className="text-xs sm:text-sm">{`git clone https://github.com/automa-dev/automa.git
cd automa
npm install
npm run build
npm start`}</code>
              </pre>
            </div>

            <div id="first-workflow" className="mb-16">
              <h2>Your First Workflow</h2>
              <p>
                Let's create a simple workflow that navigates to a website and extracts data.
              </p>
              
              <h3>Step 1: Create New Workflow</h3>
              <ol>
                <li>Open Automa</li>
                <li>Click "New Workflow"</li>
                <li>Give it a name: "My First Automation"</li>
              </ol>

              <h3>Step 2: Add Nodes</h3>
              <p>Drag these nodes onto the canvas:</p>
              <ol>
                <li><strong>Navigate</strong> - Go to a URL</li>
                <li><strong>Extract Data</strong> - Pick elements to extract</li>
                <li><strong>Export</strong> - Save the results</li>
              </ol>

              <h3>Step 3: Configure</h3>
              <ul>
                <li>Navigate node: Enter <code>https://example.com</code></li>
                <li>Extract Data: Click "Selector Picker" and click elements on the page</li>
                <li>Export: Choose JSON format</li>
              </ul>

              <h3>Step 4: Run</h3>
              <p>
                Click the "Run" button. Watch as Automa opens a browser and executes your workflow!
              </p>
            </div>

            <div id="core-concepts" className="mb-16">
              <h2>Core Concepts</h2>
              
              <h3>Workflows</h3>
              <p>
                A workflow is a graph of connected nodes that define automation steps. Each node performs a specific action.
              </p>

              <h3>Nodes</h3>
              <p>
                Nodes are the building blocks of workflows. Common node types:
              </p>
              <ul>
                <li><strong>Navigate:</strong> Go to a URL</li>
                <li><strong>Click:</strong> Click an element</li>
                <li><strong>Fill Input:</strong> Type into a form field</li>
                <li><strong>Extract Data:</strong> Get text, attributes, or HTML</li>
                <li><strong>Set Variable:</strong> Store data for later use</li>
                <li><strong>Conditional:</strong> Branch based on conditions</li>
                <li><strong>Loop:</strong> Iterate through data</li>
                <li><strong>API Call:</strong> Make HTTP requests</li>
              </ul>

              <h3>Variables</h3>
              <p>
                Variables store data that can be used across nodes. Use <code>{'{{variableName}}'}</code> syntax to reference variables.
              </p>

              <h3>Selectors</h3>
              <p>
                Automa uses CSS selectors to find elements. The Selector Picker tool generates these automatically.
              </p>
            </div>

            <div id="example-pagination" className="mb-16">
              <h2>Example: Pagination</h2>
              <p>
                Extract data from multiple pages with pagination.
              </p>
              <pre className="overflow-x-auto">
                <code className="text-xs sm:text-sm">{`{
  "name": "Pagination Example",
  "nodes": [
    {
      "type": "navigate",
      "url": "https://example.com/products?page=1"
    },
    {
      "type": "loop",
      "variable": "pageNumber",
      "from": 1,
      "to": 10,
      "body": [
        {
          "type": "extract",
          "selector": ".product-item",
          "fields": ["title", "price"],
          "saveAs": "products"
        },
        {
          "type": "click",
          "selector": ".next-page"
        },
        {
          "type": "wait",
          "duration": 2000
        }
      ]
    },
    {
      "type": "export",
      "variable": "products",
      "format": "json"
    }
  ]
}`}</code>
              </pre>
            </div>

            <div id="ipc-bridge" className="mb-16">
              <h2>API Reference: IPC Bridge</h2>
              <p>
                The IPC (Inter-Process Communication) bridge allows external applications to control Automa programmatically.
              </p>

              <h3>Endpoints</h3>
              <ul>
                <li><code>initVariables(data)</code> - Initialize workflow variables</li>
                <li><code>runStep(stepId, config)</code> - Execute a single step</li>
                <li><code>runConditional(condition, trueStep, falseStep)</code> - Conditional execution</li>
                <li><code>getResults()</code> - Retrieve workflow results</li>
              </ul>

              <h3>Example Usage</h3>
              <pre className="overflow-x-auto">
                <code className="text-xs sm:text-sm">{`const { AutomaClient } = require('@automa/client');

const client = new AutomaClient();

await client.initVariables({
  searchQuery: 'automation tools',
  maxResults: 50
});

await client.runWorkflow('my-workflow.json');

const results = await client.getResults();
console.log(results);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="p-8 rounded-2xl bg-linear-to-br from-primary-50 to-secondary-50 dark:from-primary-950/20 dark:to-secondary-950/20 border border-primary-200 dark:border-primary-800 text-center">
          <h2 className="mb-4">Need help?</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Join our community on Discord or GitHub Discussions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/B8SwwcGh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              Join Discord
            </a>
            <a
              href="https://github.com/Dyan-Dev/automa/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
            >
              GitHub Discussions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
