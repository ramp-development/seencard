import { SplitText } from 'gsap/SplitText';
import { browser } from './broswer';

export const splitWords = (element: Element | Element[], timeline: GSAPTimeline, delay: string) => {
  const formatted = new SplitText(element, { type: 'lines, words' });
  formatted.lines.forEach((line) => line.classList.add('split-mask'));

  timeline.from(
    formatted.words,
    {
      opacity: 0,
      rotationX: browser() ? -95 : 0,
      translateY: '100%',
      stagger: 0.05,
    },
    delay
  );
};
