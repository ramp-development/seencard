import { detectBrowser } from '$utils/detectBroswer';
export const browser = (): boolean => {
  const browser = detectBrowser();

  console.log(browser);

  if (browser.name !== 'Safari') return true;
  if (Number(browser.shortVersion) >= 16) return true;
  return false;
};
