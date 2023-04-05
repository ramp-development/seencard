import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

export const tabs = () => {
  const component = document.querySelector('.w-tabs');
  if (!component) return;

  const buttons = [...component?.querySelectorAll('.w-tab-link')];
  const buttonBackground = component?.querySelector('.tab-button_background');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const state = Flip.getState('.tab-button_background');
      button.insertBefore(buttonBackground, button.firstChild);
      Flip.from(state, { duration: 0.35, ease: 'power2.inOut' });
    });
  });
};
