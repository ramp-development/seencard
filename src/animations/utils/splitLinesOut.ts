import { SplitText } from 'gsap/SplitText';

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
      // rotationX: 95,
      translateY: '-100%',
      // translateY: '-75%',
      stagger: 0.1,
    },
    delay
  );
};
