import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const highlight = () => {
  const components = [...document.querySelectorAll('.highlight_component')];
  if (!components) return;

  components.forEach((component) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: component,
        start: 'top center',
        end: 'bottom center',
        scrub: 2,
      },
    });

    const children = [...component.children];

    children.forEach((child, index) => {
      if (index === 0) timeline.to(child, { color: '#601FC9' });

      timeline.to(child, { color: '#16216B' }).to(children[index + 1], { color: '#601FC9' }, '<');
    });
  });
};
