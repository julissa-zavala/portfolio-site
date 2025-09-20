// Google Tag Manager utility functions
// This file provides a centralized way to track events throughout the application

// Initialize dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

/**
 * Push an event to Google Tag Manager
 * @param {string} event - The event name
 * @param {Object} parameters - Additional parameters to send with the event
 */
export const gtmPush = (event, parameters = {}) => {
  try {
    // Check if dataLayer exists and is accessible
    if (typeof window !== 'undefined' && window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event,
        ...parameters,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
        page_title: document.title,
      });
    } else {
      console.warn('Analytics: dataLayer not available, event not tracked:', event);
    }
  } catch (error) {
    console.warn('Analytics: Failed to push event:', event, error);
  }
};

/**
 * Track page views
 * @param {string} pageName - Name of the page
 * @param {string} pagePath - Path of the page
 */
export const trackPageView = (pageName, pagePath = window.location.pathname) => {
  gtmPush('page_view', {
    page_name: pageName,
    page_path: pagePath,
    page_location: window.location.href,
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
  gtmPush('element_click', {
    element_type: elementType,
    element_text: elementText,
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
  gtmPush('case_study_interaction', {
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
  gtmPush('scroll_depth', {
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
  gtmPush('time_on_page', {
    time_spent: timeSpent,
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
  gtmPush('video_interaction', {
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
  gtmPush('image_interaction', {
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
  gtmPush('external_link_click', {
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
  gtmPush('form_interaction', {
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
  gtmPush('file_download', {
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
  gtmPush(eventName, customData);
};

// Export all tracking functions
export default {
  gtmPush,
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
