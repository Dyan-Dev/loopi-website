import { Hero } from '../components/Hero';
import { FeatureGrid } from '../components/FeatureGrid';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {


  return (
    <>
      <Hero />
      <FeatureGrid />
      {/* Comparison Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">How Loopi Is Different</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-neutral-600 dark:text-neutral-400 text-center">
                A local desktop app with visual workflows, real browser control, API nodes, and typed variables.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-sm md:text-base">
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:border-primary-500 transition-colors">
              <strong>n8n:</strong> API‑centric; lacks real browser control for UI‑heavy tasks.
            </div>
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:border-primary-500 transition-colors">
              <strong>Zapier/Make:</strong> Cloud‑only; not local‑first, limited privacy and offline use.
            </div>
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:border-primary-500 transition-colors">
              <strong>Playwright/Puppeteer:</strong> Code‑first libraries; no visual builder or typed workflows.
            </div>
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:border-primary-500 transition-colors">
              <strong>Selenium IDE:</strong> Fragile selectors; lower reliability on dynamic, complex sites.
            </div>
            <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 hover:border-primary-500 transition-colors">
              <strong>RPA suites:</strong> Closed‑source and heavy‑weight; higher cost and vendor lock‑in.
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Highlights */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">Roadmap Highlights</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-neutral-600 dark:text-neutral-400 text-center">
                Select upcoming work (non‑exhaustive; timing not promised).
              </p>
            </div>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-sm md:text-base">
            <li className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">Near‑term: No‑code API nodes, improved error handling, live variable inspector.</li>
            <li className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">Mid‑term: AI‑assisted selector stabilizer, per‑step screenshots, Recorder 2.0.</li>
            <li className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300">Platform: Scheduling and headless CLI; agentic browser actions; optional cloud sync/worker.</li>
          </ul>
        </div>
      </section>
      
      {/* Screenshot Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">See Loopi in Action</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 text-center">
                Build, run, and manage browser automations visually
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="group">
              <div className="aspect-video bg-linear-to-br from-primary-100 to-primary-200 dark:from-primary-950 dark:to-primary-900 rounded-lg md:rounded-xl mb-3 md:mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <img src="/assets/visual-node-editor.png" alt="Visual Node Editor" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg mb-1.5 md:mb-2">Visual Node Editor</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Drag and drop nodes to build complex automation workflows
              </p>
            </div>
            
            <div className="group">
              <div className="aspect-video bg-linear-to-br from-secondary-100 to-secondary-200 dark:from-secondary-950 dark:to-secondary-900 rounded-lg md:rounded-xl mb-3 md:mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-secondary-600 dark:text-secondary-400">
                  <img src="/assets/real-chromium-automation.png" alt="Real Chromium Automation" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg mb-1.5 md:mb-2">Real Chromium Automation</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Watch your automation run in real browser windows
              </p>
            </div>
            
            <div className="group">
              <div className="aspect-video bg-linear-to-br from-accent-100 to-accent-200 dark:from-accent-950 dark:to-accent-900 rounded-lg md:rounded-xl mb-3 md:mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-accent-700 dark:text-accent-400">
                  <img src="/assets/api-integration.png" alt="API Integration" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg mb-1.5 md:mb-2">API & System Integration</h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Connect to REST APIs, databases, and external services
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 md:mb-4">Ready to automate?</h2>
          <div className="max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 md:mb-8 text-center">
                Local‑first, open‑source automation that blends typed workflows, APIs, and real browser control
              </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link
              to="/downloads"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-colors group"
            >
              Download Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
