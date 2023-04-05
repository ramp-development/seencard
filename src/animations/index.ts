import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

import { features } from './features';
import { highlight } from './highlight';
import { tabs } from './tabs';

export const animations = () => {
  tabs();
  highlight();
  features();
  const groups = [...document.querySelectorAll('[data-animation-element="group"]')];
  groups.forEach((group) => {
    const heading = group.querySelector('[data-animation-element="heading"]');
    const sub = group.querySelector('[data-animation-element="sub"]');
    const buttonGroup = group.querySelector('[data-animation-element="button-group"]');
    const content = group.querySelector('[data-animation-element="content"]');

    const headingSplit = new SplitText(heading, { type: 'lines' });
    const subSplit = new SplitText(sub, { type: 'lines' });

    const timeline = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
      },
      scrollTrigger: {
        trigger: group,
        start: 'top 75%',
      },
    });

    timeline
      .from(headingSplit.lines, {
        opacity: 0,
        rotationX: -90,
        force3D: true,
        transformOrigin: 'top center -10',
      })
      .from(
        subSplit.lines,
        {
          opacity: 0,
          translateX: 16,
        },
        '<0.25'
      )
      .from(buttonGroup, { opacity: 0, translateX: 16 }, '<0.25')
      .from(
        buttonGroup?.children,
        {
          opacity: 0,
          translateX: 16,
        },
        '<'
      )
      .from(content, {
        opacity: 0,
        translateY: 32,
        duration: 1,
      });
  });
};
