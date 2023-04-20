export const icons = (element: Element, timeline: GSAPTimeline, delay: string) => {
  timeline.from(element.children, { opacity: 0, translateY: '100%', stagger: 0.1 }, delay);
};
