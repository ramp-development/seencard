import { simulateEvent } from '@finsweet/ts-utils';

export const makeTabActive = (activeTabs: HTMLDivElement[]) => {
  setTimeout(() => {
    activeTabs.forEach((tabButton) => {
      simulateEvent(tabButton, 'click');
    });
  }, 500);
};
