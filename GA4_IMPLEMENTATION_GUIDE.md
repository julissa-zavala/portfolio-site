# Google Analytics 4 Implementation Guide

## Overview
This portfolio site now has comprehensive Google Analytics 4 (GA4) tracking implemented throughout the application. The tracking system captures user interactions, page views, scroll depth, time on page, and various engagement metrics.

## GA4 Setup
- **Measurement ID**: `GA_MEASUREMENT_ID` (Replace with your actual GA4 Measurement ID)
- **Implementation**: Configured in `index.html` with gtag script

## Tracking Implementation

### 1. Core Tracking Files
- **`src/utils/analytics.js`**: Centralized GA4 utility functions
- **`src/hooks/usePageTracking.js`**: Custom hook for page-level tracking
- **`src/App.jsx`**: Route-based page view tracking

### 2. Tracked Events

#### Page Views
- **Event**: `page_view`
- **Triggered**: On every route change
- **Data**: Page name, path, URL, timestamp

#### User Interactions
- **Event**: `click`
- **Triggered**: On clicks to interactive elements
- **Data**: Element type, text, location, action, event_category

#### Case Study Interactions
- **Event**: `case_study_interaction`
- **Triggered**: On case study specific interactions
- **Data**: Case study name, action, section

#### Scroll Depth
- **Event**: `scroll`
- **Triggered**: At 25%, 50%, 75%, 100% scroll milestones
- **Data**: Scroll percentage, page name, event_category

#### Time on Page
- **Event**: `timing_complete`
- **Triggered**: When leaving a page
- **Data**: Time spent (seconds), page name, event_category

#### Video Interactions
- **Event**: `video_interaction`
- **Triggered**: On video play, pause, complete
- **Data**: Video name, action, current time

#### Image Interactions
- **Event**: `image_interaction`
- **Triggered**: On image zoom, view
- **Data**: Image name, action, location

#### External Links
- **Event**: `click`
- **Triggered**: On external link clicks
- **Data**: Link URL, text, location, event_category (outbound)

#### File Downloads
- **Event**: `file_download`
- **Triggered**: On file download clicks
- **Data**: File name, type, location

## GA4 Configuration

### 1. Setup Steps

#### Get Your GA4 Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use existing one
3. Go to Admin → Data Streams → Web
4. Copy your Measurement ID (format: G-XXXXXXXXXX)

#### Update Your Code
1. Replace `GA_MEASUREMENT_ID` in `index.html` with your actual Measurement ID
2. Replace `GA_MEASUREMENT_ID` in `src/utils/analytics.js` with your actual Measurement ID

### 2. GA4 Events Overview

All events are automatically sent to GA4 with the following structure:
- **Event Name**: The specific event type (e.g., `page_view`, `click`, `scroll`)
- **Event Parameters**: Custom data including event_category, event_label, and specific parameters
- **Automatic Parameters**: page_url, page_title, timestamp

### 3. Event Categories

Events are organized by category for better analysis:
- **engagement**: General user interactions (clicks, scrolls)
- **case_study**: Case study specific interactions
- **video**: Video interactions
- **form**: Form interactions
- **download**: File downloads
- **outbound**: External link clicks

## Testing Your Implementation

### 1. GA4 Debug Mode
1. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension
2. Enable debug mode in your browser
3. Navigate through your site and check the console for GA4 events

### 2. Browser Developer Tools
1. Open Developer Tools (F12)
2. Go to Console tab
3. Type: `window.gtag`
4. Verify gtag function is available
5. Check Network tab for requests to `google-analytics.com`

### 3. Google Analytics Real-Time Reports
1. Go to GA4 Real-Time reports
2. Navigate through your site
3. Verify events appear in real-time
4. Check Events section for custom events

### 4. Test Specific Events

#### Test Page Views
- Navigate between pages
- Verify `page_view` events fire

#### Test Click Tracking
- Click on case study images
- Click "READ MORE" buttons
- Click external links
- Click download links
- Verify `click` events fire with proper event_category

#### Test Video Tracking
- Play/pause videos
- Verify `video_interaction` events

#### Test Scroll Tracking
- Scroll down pages
- Verify `scroll` events at milestones (25%, 50%, 75%, 100%)

## Event Data Structure

### Example Page View Event
```javascript
gtag('event', 'page_view', {
  page_title: 'Data Grid Case Study',
  page_location: 'https://yoursite.com/dataGrid',
  page_path: '/dataGrid',
  timestamp: '2024-01-15T10:30:00.000Z'
});
```

### Example Click Event
```javascript
gtag('event', 'click', {
  event_category: 'engagement',
  event_label: 'Data Grid Case Study Preview',
  element_type: 'image',
  element_location: 'Case Study Preview',
  action: 'click',
  timestamp: '2024-01-15T10:30:00.000Z'
});
```

### Example Case Study Interaction
```javascript
gtag('event', 'case_study_interaction', {
  event_category: 'case_study',
  event_label: 'Data Grid',
  case_study_name: 'Data Grid',
  action: 'click',
  section: 'preview_image',
  timestamp: '2024-01-15T10:30:00.000Z'
});
```

## Customization

### Adding New Events
1. Add new function to `src/utils/analytics.js`
2. Import and use in components
3. Events will automatically appear in GA4

### Modifying Existing Events
1. Update function in `src/utils/analytics.js`
2. Test thoroughly
3. Check GA4 Real-Time reports for changes

## Troubleshooting

### Common Issues
1. **Events not firing**: Check GA4 Measurement ID
2. **Missing data**: Verify gtag function is available
3. **Duplicate events**: Check for multiple GA4 implementations
4. **Performance issues**: Ensure tracking doesn't block page load

### Debug Commands
```javascript
// Check gtag function
console.log(window.gtag);

// Manually trigger event
gtag('event', 'test_event', {
  test_data: 'test_value'
});

// Check if GA4 is loaded
console.log(window.dataLayer);
```

## Privacy Considerations
- All tracking respects user privacy
- No personally identifiable information is collected
- Consider adding cookie consent if required by law
- Implement opt-out mechanisms if needed

## Performance Impact
- Minimal performance impact
- All tracking is asynchronous
- No blocking operations
- Efficient event batching

This implementation provides comprehensive tracking while maintaining good performance and user experience.
