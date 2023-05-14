import { SplitText } from 'gsap/SplitText';

export const splitChars = (element: Element | Element[], timeline: GSAPTimeline, delay: string) => {
  const formatted = new SplitText(element, { type: 'lines, chars' });
  formatted.lines.forEach((line) => line.classList.add('split-mask'));

  timeline.from(
    formatted.chars,
    {
      opacity: 0,
      // rotationX: -95,
      // translateY: '100%',
      translateY: '75%',
    },
    delay
  );
};
