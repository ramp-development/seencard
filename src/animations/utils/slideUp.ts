export const slideUp = (element: Element, timeline: GSAPTimeline, delay: string) => {
  timeline.from(element, { translateY: 16 }, delay);
};
