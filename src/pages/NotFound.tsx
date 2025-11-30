import { Link } from 'react-router';
import { Home, Search, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <FileQuestion className="w-24 h-24 mx-auto text-primary-600 dark:text-accent-400 mb-6" />
          <h1 className="text-primary-600 dark:text-accent-400 mb-4">404 - Page Not Found</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          <Link
            to="/docs"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-950/20 transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Documentation
          </Link>
        </div>

        <div className="text-neutral-600 dark:text-neutral-400">
          <p className="mb-4">Popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/open-source" className="text-primary-600 dark:text-accent-400 hover:underline">
              Open Source Edition
            </Link>
            <Link to="/enterprise" className="text-primary-600 dark:text-accent-400 hover:underline">
              Enterprise Edition
            </Link>
            <Link to="/pricing" className="text-primary-600 dark:text-accent-400 hover:underline">
              Pricing
            </Link>
            <Link to="/downloads" className="text-primary-600 dark:text-accent-400 hover:underline">
              Downloads
            </Link>
            <Link to="/about" className="text-primary-600 dark:text-accent-400 hover:underline">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
