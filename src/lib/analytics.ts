// Helper for Google Analytics 4 (GA4) event tracking

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Sends a custom conversion event to Google Analytics 4
 * @param location Name of the section or button where the click happened
 */
export const trackInterestClick = (location: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: 'Tenho interesse',
      button_location: location,
      value: 1,
    });
  }
};
