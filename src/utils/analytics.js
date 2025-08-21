// Google Analytics utility functions
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track search queries
export const trackSearch = (query, domain) => {
  trackEvent('search', {
    search_term: query,
    domain: domain
  });
};

// Track profile views
export const trackProfileView = (profileId, profileName, domain) => {
  trackEvent('profile_view', {
    profile_id: profileId,
    profile_name: profileName,
    domain: domain
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
};