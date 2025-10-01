import { useEffect, useRef } from 'react';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

/**
 * Custom hook for tracking page views and user engagement
 * @param {string} pageName - Name of the current page
 * @param {Object} options - Additional tracking options
 */
export const usePageTracking = (pageName, options = {}) => {
  const startTime = useRef(Date.now());
  const scrollDepthTracked = useRef(new Set());

  useEffect(() => {
    // Track page view
    trackPageView(pageName);

    // Track time on page when component unmounts
    const trackTimeOnUnmount = () => {
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      trackTimeOnPage(timeSpent, pageName);
    };

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

      // Track scroll milestones (25%, 50%, 75%, 100%)
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone);
          trackScrollDepth(milestone, pageName);
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      trackTimeOnUnmount();
    };
  }, [pageName]);

  return {
    trackPageView: () => trackPageView(pageName),
    trackScrollDepth: (depth) => trackScrollDepth(depth, pageName),
    trackTimeOnPage: (time) => trackTimeOnPage(time, pageName),
  };
};

export default usePageTracking;
