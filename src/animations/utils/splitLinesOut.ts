import { SplitText } from 'gsap/SplitText';

import { browser } from './broswer';

export const splitLinesOut = (
  element: Element | Element[],
  timeline: GSAPTimeline,
  delay: string
) => {
  const formatted = new SplitText(element, { type: 'lines' });
  formatted.lines.forEach((line) => line.classList.add('split-mask'));

  timeline.to(
    formatted.lines,
    {
      opacity: 0,
      rotationX: browser() ? 95 : 0,
      translateY: '-100%',
      stagger: 0.1,
    },
    delay
  );
};
