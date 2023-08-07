import { simulateEvent } from '@finsweet/ts-utils';

export const card = () => {
  const newCardholderButton = document.querySelector('#new-cardholders-button');
  if (!newCardholderButton) return;
  setTimeout(() => {
    simulateEvent(newCardholderButton, 'click');
  }, 500);
};
