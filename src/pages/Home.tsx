import { Hero } from '../components/Hero';
import { FeatureGrid } from '../components/FeatureGrid';
import { PricingTable } from '../components/PricingTable';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Update page metadata
    document.title = 'Automa — Visual Browser Automation for humans and teams';
  }, []);

  return (
    <>
      <Hero />
      <FeatureGrid />
      
      {/* Screenshot Carousel Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">See Automa in Action</h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Build, run, and manage browser automations visually
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-video bg-linear-to-br from-primary-100 to-primary-200 dark:from-primary-950 dark:to-primary-900 rounded-xl mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-primary-600 dark:text-primary-400">
                  [Visual Node Editor Screenshot]
                </div>
              </div>
              <h3 className="text-lg mb-2">Visual Node Editor</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Drag and drop nodes to build complex automation workflows
              </p>
            </div>
            
            <div className="group">
              <div className="aspect-video bg-linear-to-br from-secondary-100 to-secondary-200 dark:from-secondary-950 dark:to-secondary-900 rounded-xl mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-secondary-600 dark:text-secondary-400">
                  [Live Browser Window Screenshot]
                </div>
              </div>
              <h3 className="text-lg mb-2">Real Chromium Automation</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Watch your automation run in real browser windows
              </p>
            </div>
            
            <div className="group">
              <div className="aspect-video bg-linear-to-br from-accent-100 to-accent-200 dark:from-accent-950 dark:to-accent-900 rounded-xl mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-accent-700 dark:text-accent-400">
                  [Integration Dashboard Screenshot]
                </div>
              </div>
              <h3 className="text-lg mb-2">API & System Integration</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Connect to REST APIs, databases, and external services
              </p>
            </div>
          </div>
        </div>
      </section>

      <PricingTable />
      
      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to automate?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start with the open source edition or talk to our team about Enterprise features
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/open-source"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-colors group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/enterprise"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
