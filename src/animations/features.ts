import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

export const features = () => {
  const featureGroups = [...document.querySelectorAll('[data-animation-element="features"]')];
  if (!featureGroups) return;

  featureGroups.forEach((featureGroup) => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: featureGroup,
        start: 'top 80%',
      },
    });

    const features = [...document.querySelectorAll('[data-animation-element="feature"]')];
    features.forEach((feature) => {
      const icon = feature.querySelector('[data-animation-element="icon"]');
      const heading = feature.querySelector('[data-animation-element="heading"]');
      const sub = feature.querySelector('[data-animation-element="sub"]');

      const headingSplit = new SplitText(heading, { type: 'lines' });
      const subSplit = new SplitText(sub, { type: 'lines' });

      timeline
        .from(
          icon,
          {
            opacity: 0,
            translateY: '100%',
          },
          '<'
        )
        .from(
          headingSplit.lines,
          {
            opacity: 0,
            rotationX: -90,
            force3D: true,
            transformOrigin: 'top center -10',
            stagger: 0.1,
          },
          '< 0.1'
        )
        .from(
          subSplit.lines,
          {
            opacity: 0,
            translateX: 16,
            stagger: 0.1,
          },
          '<0.25'
        );
    });
  });
};
