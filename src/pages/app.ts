import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const app = () => {
  const hero = document.querySelector('.app-hero_component');
  const icon = hero?.querySelector('.app-hero_icon-wrapper');
  const images = hero?.querySelectorAll('.app-hero_image-load');

  const timeline = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power2.out',
    },
  });

  window.scrollBy(0, 1);

  timeline.from(icon, { width: '50%' }).from(images, { translateY: '10%', stagger: 0.1 }, '<');
};
