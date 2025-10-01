// Google Analytics 4 utility functions
// This file provides a centralized way to track events throughout the application

const GA4_MEASUREMENT_ID = 'G-L0Z9GJ31VC';

/**
 * Send an event to Google Analytics 4
 * @param {string} eventName - The event name
 * @param {Object} parameters - Additional parameters to send with the event
 */
export const gtagEvent = (eventName, parameters = {}) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        ...parameters,
        page_url: window.location.href,
        page_title: document.title,
        timestamp: new Date().toISOString(),
      });
    } else {
      console.warn('Analytics: gtag not available, event not tracked:', eventName);
    }
  } catch (error) {
    console.warn('Analytics: Failed to send event:', eventName, error);
  }
};

/**
 * Track page views
 * @param {string} pageName - Name of the page
 * @param {string} pagePath - Path of the page
 */
export const trackPageView = (pageName, pagePath = window.location.pathname) => {
  gtagEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: pagePath,
  });
};

/**
 * Track clicks on interactive elements
 * @param {string} elementType - Type of element (button, link, image, etc.)
 * @param {string} elementText - Text content of the element
 * @param {string} elementLocation - Where the element is located on the page
 * @param {string} action - What action was performed (click, hover, etc.)
 */
export const trackClick = (elementType, elementText, elementLocation, action = 'click') => {
  gtagEvent('click', {
    event_category: 'engagement',
    event_label: elementText,
    element_type: elementType,
    element_location: elementLocation,
    action,
  });
};

/**
 * Track case study interactions
 * @param {string} caseStudyName - Name of the case study
 * @param {string} action - Action performed (view, click, scroll)
 * @param {string} section - Section of the case study
 */
export const trackCaseStudyInteraction = (caseStudyName, action, section = '') => {
  gtagEvent('case_study_interaction', {
    event_category: 'case_study',
    event_label: caseStudyName,
    case_study_name: caseStudyName,
    action,
    section,
  });
};

/**
 * Track scroll depth
 * @param {number} scrollDepth - Percentage of page scrolled
 * @param {string} pageName - Name of the page
 */
export const trackScrollDepth = (scrollDepth, pageName) => {
  gtagEvent('scroll', {
    event_category: 'engagement',
    event_label: `${pageName} - ${scrollDepth}%`,
    scroll_depth: scrollDepth,
    page_name: pageName,
  });
};

/**
 * Track time spent on page
 * @param {number} timeSpent - Time spent in seconds
 * @param {string} pageName - Name of the page
 */
export const trackTimeOnPage = (timeSpent, pageName) => {
  gtagEvent('timing_complete', {
    event_category: 'engagement',
    event_label: pageName,
    name: 'time_on_page',
    value: timeSpent,
    page_name: pageName,
  });
};

/**
 * Track video interactions
 * @param {string} videoName - Name/identifier of the video
 * @param {string} action - Action performed (play, pause, complete)
 * @param {number} currentTime - Current time in video (for play/pause)
 */
export const trackVideoInteraction = (videoName, action, currentTime = 0) => {
  gtagEvent('video_interaction', {
    event_category: 'video',
    event_label: videoName,
    video_name: videoName,
    action,
    current_time: currentTime,
  });
};

/**
 * Track image interactions (zoom, view)
 * @param {string} imageName - Name/identifier of the image
 * @param {string} action - Action performed (zoom, view)
 * @param {string} location - Where the image is located
 */
export const trackImageInteraction = (imageName, action, location) => {
  gtagEvent('image_interaction', {
    event_category: 'engagement',
    event_label: imageName,
    image_name: imageName,
    action,
    location,
  });
};

/**
 * Track external link clicks
 * @param {string} linkUrl - URL being clicked
 * @param {string} linkText - Text of the link
 * @param {string} linkLocation - Where the link is located
 */
export const trackExternalLink = (linkUrl, linkText, linkLocation) => {
  gtagEvent('click', {
    event_category: 'outbound',
    event_label: linkText,
    link_url: linkUrl,
    link_text: linkText,
    link_location: linkLocation,
  });
};

/**
 * Track form interactions (if any)
 * @param {string} formName - Name of the form
 * @param {string} action - Action performed (submit, focus, etc.)
 * @param {string} fieldName - Name of the field (for focus/blur events)
 */
export const trackFormInteraction = (formName, action, fieldName = '') => {
  gtagEvent('form_interaction', {
    event_category: 'form',
    event_label: formName,
    form_name: formName,
    action,
    field_name: fieldName,
  });
};

/**
 * Track download events
 * @param {string} fileName - Name of the file being downloaded
 * @param {string} fileType - Type of file (pdf, image, etc.)
 * @param {string} location - Where the download link is located
 */
export const trackDownload = (fileName, fileType, location) => {
  gtagEvent('file_download', {
    event_category: 'download',
    event_label: fileName,
    file_name: fileName,
    file_type: fileType,
    location,
  });
};

/**
 * Track custom events
 * @param {string} eventName - Name of the custom event
 * @param {Object} customData - Custom data to send with the event
 */
export const trackCustomEvent = (eventName, customData = {}) => {
  gtagEvent(eventName, customData);
};

export default {
  gtagEvent,
  trackPageView,
  trackClick,
  trackCaseStudyInteraction,
  trackScrollDepth,
  trackTimeOnPage,
  trackVideoInteraction,
  trackImageInteraction,
  trackExternalLink,
  trackFormInteraction,
  trackDownload,
  trackCustomEvent,
};
