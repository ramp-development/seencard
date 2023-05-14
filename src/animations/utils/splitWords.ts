import { SplitText } from 'gsap/SplitText';

export const splitWords = (element: Element | Element[], timeline: GSAPTimeline, delay: string) => {
  const formatted = new SplitText(element, { type: 'lines, words' });
  formatted.lines.forEach((line) => line.classList.add('split-mask'));

  timeline.from(
    formatted.words,
    {
      opacity: 0,
      // rotationX: -95,
      // translateY: '100%',
      translateY: '75%',
      stagger: 0.05,
    },
    delay
  );
};
