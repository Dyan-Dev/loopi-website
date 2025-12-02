import { Link } from 'react-router';
import { Github, ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';
import { VideoModal } from './VideoModal';

export function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Automa — Visual Browser Automation for humans and teams
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
                  Design browser automation as a node graph, run it in real Chromium windows, and integrate with your systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link
                  to="/open-source"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors group"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Get Open Source
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/docs"
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-colors"
                >
                  Read Documentation
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span>MIT License</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full"></div>
                  <span>Open Source</span>
                </div>
              </div>
            </div>

            {/* Video/Media */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-neutral-900 shadow-xl md:shadow-2xl border border-neutral-200 dark:border-neutral-800">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/assets/video-poster.png"
                >
                  <source src="/assets/hero-promo.mp4" type="video/mp4" />
                </video>
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  aria-label="Watch full demo"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 ml-1" fill="currentColor" />
                  </div>
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-primary-500/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-accent-500/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} />
    </>
  );
}
