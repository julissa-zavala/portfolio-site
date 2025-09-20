# Google Tag Manager Implementation Guide

## Overview
This portfolio site now has comprehensive Google Tag Manager (GTM) tracking implemented throughout the application. The tracking system captures user interactions, page views, scroll depth, time on page, and various engagement metrics.

## GTM Container Setup
- **Container ID**: `GTM-K29SFNNH`
- **Implementation**: Already configured in `index.html`

## Tracking Implementation

### 1. Core Tracking Files
- **`src/utils/gtm.js`**: Centralized GTM utility functions
- **`src/hooks/usePageTracking.js`**: Custom hook for page-level tracking
- **`src/App.jsx`**: Route-based page view tracking

### 2. Tracked Events

#### Page Views
- **Event**: `page_view`
- **Triggered**: On every route change
- **Data**: Page name, path, URL, timestamp

#### User Interactions
- **Event**: `element_click`
- **Triggered**: On clicks to interactive elements
- **Data**: Element type, text, location, action

#### Case Study Interactions
- **Event**: `case_study_interaction`
- **Triggered**: On case study specific interactions
- **Data**: Case study name, action, section

#### Scroll Depth
- **Event**: `scroll_depth`
- **Triggered**: At 25%, 50%, 75%, 100% scroll milestones
- **Data**: Scroll percentage, page name

#### Time on Page
- **Event**: `time_on_page`
- **Triggered**: When leaving a page
- **Data**: Time spent (seconds), page name

#### Video Interactions
- **Event**: `video_interaction`
- **Triggered**: On video play, pause, complete
- **Data**: Video name, action, current time

#### Image Interactions
- **Event**: `image_interaction`
- **Triggered**: On image zoom, view
- **Data**: Image name, action, location

#### External Links
- **Event**: `external_link_click`
- **Triggered**: On external link clicks
- **Data**: Link URL, text, location

#### File Downloads
- **Event**: `file_download`
- **Triggered**: On file download clicks
- **Data**: File name, type, location

## GTM Configuration

### 1. Create Triggers in GTM

#### Page View Trigger
- **Type**: Page View
- **Trigger Name**: "Page View - All Pages"
- **Trigger Type**: Page View

#### Custom Event Triggers
Create triggers for each event type:
- `element_click`
- `case_study_interaction`
- `scroll_depth`
- `time_on_page`
- `video_interaction`
- `image_interaction`
- `external_link_click`
- `file_download`

### 2. Create Variables in GTM

#### Built-in Variables
Enable these built-in variables:
- Page URL
- Page Title
- Referrer
- Event

#### Custom Variables
Create these custom variables:
- `element_type` (Data Layer Variable)
- `element_text` (Data Layer Variable)
- `element_location` (Data Layer Variable)
- `case_study_name` (Data Layer Variable)
- `scroll_depth` (Data Layer Variable)
- `time_spent` (Data Layer Variable)
- `video_name` (Data Layer Variable)
- `image_name` (Data Layer Variable)
- `link_url` (Data Layer Variable)
- `file_name` (Data Layer Variable)

### 3. Create Tags in GTM

#### Google Analytics 4 Tag
- **Tag Type**: Google Analytics: GA4 Event
- **Measurement ID**: Your GA4 Measurement ID
- **Event Name**: {{Event}}
- **Event Parameters**: Map all custom variables

#### Enhanced Ecommerce Tag (if needed)
- **Tag Type**: Google Analytics: GA4 Enhanced Ecommerce
- **Event Name**: `purchase` (for download tracking)

## Testing Your Implementation

### 1. GTM Preview Mode
1. Go to your GTM container
2. Click "Preview" button
3. Enter your website URL
4. Navigate through your site and verify events are firing

### 2. Browser Developer Tools
1. Open Developer Tools (F12)
2. Go to Console tab
3. Type: `window.dataLayer`
4. Verify events are being pushed to dataLayer

### 3. Google Analytics Real-Time Reports
1. Go to GA4 Real-Time reports
2. Navigate through your site
3. Verify events appear in real-time

### 4. Test Specific Events

#### Test Page Views
- Navigate between pages
- Verify `page_view` events fire

#### Test Click Tracking
- Click on case study images
- Click "READ MORE" buttons
- Click external links
- Click download links

#### Test Video Tracking
- Play/pause videos
- Verify `video_interaction` events

#### Test Scroll Tracking
- Scroll down pages
- Verify `scroll_depth` events at milestones

## Event Data Structure

### Example Page View Event
```javascript
{
  event: 'page_view',
  page_name: 'Data Grid Case Study',
  page_path: '/dataGrid',
  page_location: 'https://yoursite.com/dataGrid',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

### Example Click Event
```javascript
{
  event: 'element_click',
  element_type: 'image',
  element_text: 'Data Grid Case Study Preview',
  element_location: 'Case Study Preview',
  action: 'click',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

### Example Case Study Interaction
```javascript
{
  event: 'case_study_interaction',
  case_study_name: 'Data Grid',
  action: 'click',
  section: 'preview_image',
  timestamp: '2024-01-15T10:30:00.000Z'
}
```

## Customization

### Adding New Events
1. Add new function to `src/utils/gtm.js`
2. Import and use in components
3. Create corresponding GTM trigger and tag

### Modifying Existing Events
1. Update function in `src/utils/gtm.js`
2. Update GTM variables if needed
3. Test thoroughly

## Troubleshooting

### Common Issues
1. **Events not firing**: Check GTM container ID
2. **Missing data**: Verify dataLayer variable names match
3. **Duplicate events**: Check for multiple GTM containers
4. **Performance issues**: Ensure tracking doesn't block page load

### Debug Commands
```javascript
// Check dataLayer
console.log(window.dataLayer);

// Manually trigger event
window.dataLayer.push({
  event: 'test_event',
  test_data: 'test_value'
});
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
