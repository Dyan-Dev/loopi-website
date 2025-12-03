import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
    // Enable analytics here if needed
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            We use cookies to improve your experience. Analytics are{' '}
            <span className="font-semibold">disabled by default</span> and only enabled with your consent.{' '}
            <Link to="/privacy" className="underline">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Accept
          </button>
          <button
            onClick={handleDecline}
            className="p-2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
