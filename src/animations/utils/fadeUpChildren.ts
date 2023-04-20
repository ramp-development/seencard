import { fadeUp } from './fadeUp';

export const fadeUpChildren = (element: Element, timeline: GSAPTimeline, delay: string) => {
  if (!element.children) fadeUp(element, timeline, delay);

  timeline.from(
    element?.children,
    {
      opacity: 0,
      translateY: '16',
      stagger: 0.1,
    },
    delay
  );
};
