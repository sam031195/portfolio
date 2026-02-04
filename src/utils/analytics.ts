type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type GtagCommand = 'event' | 'config' | 'js';

type GtagFn = (command: GtagCommand, eventName: string | Date, params?: AnalyticsParams) => void;

export const trackEvent = (eventName: string, params?: AnalyticsParams): void => {
  if (typeof window === 'undefined') return;

  const gtag = window.gtag as GtagFn | undefined;
  if (import.meta.env.DEV) {
    console.log('[analytics] trackEvent', eventName, params || {});
  }
  if (typeof gtag !== 'function') return;

  gtag('event', eventName, params);
};
