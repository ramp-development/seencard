import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as utils from './utils';

export const groups = () => {
  const groups = [...document.querySelectorAll('[data-animation-element="group"]')];

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    groups.forEach((group) => {
      // get the trigger and cancel if custom
      const trigger = group.dataset.animationTrigger;
      if (trigger === 'custom') return;

      // reference to elements
      const iconWrapper = group.querySelector('[data-animation-element="icon-wrapper"]');
      const heading = group.querySelector('[data-animation-element="heading"]');
      const sub = group.querySelectorAll('[data-animation-element="sub"]');
      const features = group.querySelector('[data-animation-element="features"]');
      const images = group.querySelector('[data-animation-element="images"]');
      const lists = group.querySelectorAll('[data-animation-element="list"]');
      const buttonGroups = [...group.querySelectorAll('[data-animation-element="button-group"]')];
      const content = group.querySelector('[data-animation-element="content"]');

      const timeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power2.out',
          stagger: 0.01,
          // force3D: true,
        },
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          onload: (self) => self.progress === 1 && self.animation.progress(1),
          onRefresh: (self) => self.progress === 1 && self.animation.progress(1),
        },
      });

      if (iconWrapper) utils.icons(iconWrapper, timeline, '0');
      if (heading) utils.splitChars(heading, timeline, '0');
      if (sub) utils.splitLines(sub, timeline, '<0.25');
      if (features) utils.features(features, timeline, '<0.1');
      if (content) utils.fadeUp(content, timeline, '<0.1');
      if (lists.length !== 0) lists.forEach((list) => utils.fadeUpChildren(list, timeline, '<0.1'));
      if (images) utils.slideUpChildren(images, timeline, '0');

      if (buttonGroups.length === 1) utils.buttons(buttonGroups[0], timeline, '<0.25');
      if (buttonGroups.length > 1) {
        buttonGroups.forEach((buttonGroup, index) => {
          if (index === 0) return;
          utils.buttons(buttonGroup, timeline, '<0.1');
        });
      }

      if (trigger) {
        const timeout = trigger === 'instant' ? 0 : parseFloat(trigger);
        setTimeout(() => {
          timeline.play();
        }, timeout);
      }

      document.addEventListener('refreshScrollTrigger', () => {
        timeline.scrollTrigger.refresh();
      });
    });
  });
};
