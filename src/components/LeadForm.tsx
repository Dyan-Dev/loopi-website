import { useState } from 'react';
import { useForm } from 'react-hook-form@7.55.0';
import { z } from 'zod';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  useCase: z.string().min(10, 'Please describe your use case (min 10 characters)'),
  seats: z.string(),
});

type LeadFormData = z.infer<typeof leadSchema>;

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    try {
      setError(null);
      
      // In production, this would send to your backend/webhook
      // For now, we'll simulate a submission
      console.log('Lead form submitted:', data);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demo purposes, you can replace this with:
      // await fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) });
      // or integrate with services like HubSpot, Salesforce, etc.
      
      setSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-accent-50 dark:bg-accent-950/20 border border-accent-200 dark:border-accent-800 rounded-lg">
          <p className="text-accent-800 dark:text-accent-200">
            Thank you! We'll be in touch within 24 hours.
          </p>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium mb-2">
              Company *
            </label>
            <input
              id="company"
              type="text"
              {...register('company', { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              placeholder="Acme Inc."
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="seats" className="block text-sm font-medium mb-2">
            Number of Seats *
          </label>
          <select
            id="seats"
            {...register('seats', { required: true })}
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors"
          >
            <option value="">Select...</option>
            <option value="1-5">1-5 seats</option>
            <option value="6-25">6-25 seats</option>
            <option value="26-100">26-100 seats</option>
            <option value="100+">100+ seats</option>
          </select>
          {errors.seats && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">Please select number of seats</p>
          )}
        </div>

        <div>
          <label htmlFor="useCase" className="block text-sm font-medium mb-2">
            Use Case *
          </label>
          <textarea
            id="useCase"
            {...register('useCase', { required: true })}
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors resize-none"
            placeholder="Tell us about your automation needs..."
          />
          {errors.useCase && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.useCase.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Request Demo'}
        </button>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          . We'll never share your information.
        </p>
      </form>
    </div>
  );
}
