export const buttons = (buttonGroup: Element, timeline: GSAPTimeline, delay: string) => {
  const buttonTexts = buttonGroup.querySelectorAll('.button_text');

  timeline.from(buttonGroup, { backgroundColor: 'transparent' }, delay).from(
    buttonGroup.children,
    {
      opacity: 0,
      translateX: '16',
      stagger: 0.1,
    },
    '<'
  );

  if (buttonTexts.length > 0) {
    timeline.from(
      buttonTexts,
      {
        opacity: 0,
        rotateX: -95,
        translateY: '100%',
        stagger: 0.1,
      },
      '<'
    );
  }
};
