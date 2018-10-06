/**
 * Send a pageview event to analytics
 * @param path {string}
 */
export const sendPageView = path => {
  if (!window.ga) return false;
  window.ga('gtm1.set', 'page', path);
  window.ga('gtm1.send', 'pageview');
};
