export const fadeUp = (element: Element, timeline: GSAPTimeline, delay: string) => {
  timeline.from(element, { opacity: 0, translateY: 16 }, delay);
};
