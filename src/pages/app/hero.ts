import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitChars } from 'src/animations/utils';

export const hero = () => {
  const hero = document.querySelector('.app-hero_component');
  const icon = hero?.querySelector('.app-hero_icon-wrapper');
  const heading = hero?.querySelector('h1');
  const images = hero?.querySelectorAll('.app-hero_image-load');
  const spacers = hero?.querySelectorAll('.app-hero_spacer');

  const heroMM = gsap.matchMedia();
  heroMM.add(
    {
      isDesktop: `(min-width: 768px)`,
      isMobile: `(max-width: 767px)`,
    },
    (context) => {
      const { isDesktop, isMobile } = context.conditions;

      const timeline = gsap.timeline({
        defaults: {
          duration: 1.5,
          ease: 'power2.inOut',
        },
        onComplete: () => {
          const event = new Event('refreshScrollTrigger');
          document.dispatchEvent(event);
        },
      });

      timeline
        .set(icon, {
          opacity: 0,
          width: isDesktop ? '25%' : '50%',
          marginTop:
            (window.innerHeight - icon.offsetHeight) / 2 -
            parseFloat(getComputedStyle(hero).paddingTop),
        })
        .to(icon, { opacity: 1, duration: 0.5 }, '0.25')
        .to(icon, { width: isDesktop ? '8.5%' : '25%', marginTop: 0 }, '<0.25');

      splitChars(heading, timeline, '<');

      timeline
        .from(spacers, { height: '16rem', stagger: 0.1 }, '<')
        .from(images, { translateY: '25%', stagger: 0.1, duration: 2 }, '<');
    }
  );
};
