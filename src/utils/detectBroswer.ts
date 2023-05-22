import BrowserDetector from 'browser-dtector';

export const detectBrowser = () => {
  const browser = new BrowserDetector(window.navigator.userAgent);
  return browser.getBrowserInfo();
};
