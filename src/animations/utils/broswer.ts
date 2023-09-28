import { detectBrowser } from '$utils/detectBroswer';
export const browser = (): boolean => {
  const browser = detectBrowser();

  if (browser.name !== 'Safari') return true;
  if (Number(browser.shortVersion) >= 16) return true;
  return false;
};
