import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import * as utils from '../animations/utils';

export const intiScrollingPanels = () => {
  const component = document.querySelector('[data-scrolling-panels="component"]');
  const triggers = component?.querySelectorAll('[data-scrolling-panels="trigger"]');
  const underlines = component?.querySelectorAll('[data-scrolling-panels="underline"]');
  const sections = component?.querySelectorAll('[data-scrolling-panels="section"]');

  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    triggers?.forEach((trigger, index) => {
      const timeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power2.out',
          stagger: 0.01,
          // force3D: true,
        },
        scrollTrigger: {
          trigger,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.scrolling-panels_main',
          scrub: 1,
          onload: (self) => self.progress === 1 && self.animation.progress(1),
          onRefresh: (self) => self.progress === 1 && self.animation.progress(1),
        },
      });

      const section = sections[index];
      const underline = underlines[index];
      const group = section.querySelector('[data-animation-element="group"]');
      const heading = group?.querySelector('[data-animation-element="heading"]');
      const sub = group?.querySelector('[data-animation-element="sub"]');
      const buttonGroup = group?.querySelector('[data-animation-element="button-group"]');
      const image = section.querySelector('[data-scrolling-panels="image"]');
      const imageProgress = section.querySelector('[data-scrolling-panels="image-progress"]');

      if (group) timeline.from(group, { opacity: 0 }, '0');
      if (image) timeline.from(image, { opacity: 0 }, '0');
      if (heading) utils.splitChars(heading, timeline, '0');
      if (sub) utils.splitLines(sub, timeline, '<0.25');
      if (buttonGroup) utils.buttons(buttonGroup, timeline, '<0.25');

      if (index !== triggers.length - 1) {
        if (group) timeline.to(group, { opacity: 0 }, '<2');
      }

      if (image) {
        timeline.from(
          image,
          { scale: 1.1, duration: timeline.duration(), ease: 'power0.out' },
          '0'
        );
      }

      if (underline) {
        timeline.from(
          underline,
          { translateX: '-100%', duration: timeline.duration(), ease: 'power0.out' },
          '0'
        );
      }

      if (imageProgress) {
        timeline.fromTo(
          imageProgress,
          {
            translateY: '-100%',
          },
          {
            translateY: '100%',
            delay: timeline.duration() * 0.1,
            duration: timeline.duration() * 0.8,
            ease: 'power0.out',
          },
          '0'
        );
      }
    });
  });
};
