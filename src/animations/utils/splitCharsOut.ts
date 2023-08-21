import { SplitText } from 'gsap/SplitText';

import { browser } from './broswer';

export const splitCharsOut = (
  element: Element | Element[],
  timeline: GSAPTimeline,
  delay: string
) => {
  const formatted = new SplitText(element, { type: 'lines, chars' });
  formatted.lines.forEach((line) => line.classList.add('split-mask'));

  timeline.to(
    formatted.chars,
    {
      opacity: 0,
      rotationX: browser() ? 95 : 0,
      translateY: '-100%',
    },
    delay
  );
};
