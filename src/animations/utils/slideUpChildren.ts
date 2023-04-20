import { slideUp } from './slideUp';

export const slideUpChildren = (element: Element, timeline: GSAPTimeline, delay: string) => {
  if (!element.children) slideUp(element, timeline, delay);

  timeline.from(
    element?.children,
    {
      translateY: '10%',
      stagger: 0.1,
    },
    delay
  );
};
