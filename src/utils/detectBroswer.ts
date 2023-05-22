import BrowserDetector from 'browser-dtector';

export const detectBrowser = () => {
  console.log('detectBrowser');
  const browser = new BrowserDetector(window.navigator.userAgent);
  console.log(browser.parseUserAgent());
  console.log(browser.getBrowserInfo());
};
