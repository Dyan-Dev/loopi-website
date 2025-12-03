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
      
      {/* Screenshot Carousel Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">See Automa in Action</h2>
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
              Start automating with our free, open source browser automation tool
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
