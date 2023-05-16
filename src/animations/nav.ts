import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const nav = () => {
  const navPos = document.querySelector('.nav_pos');
  if (!navPos) return;
  const navComponent = navPos.querySelector('.nav_component');
  if (!navComponent) return;
  const navBanner = navPos.querySelector('.nav_banner');

  // define gsap timeline
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      start: `top -${window.innerHeight}`,
      onEnter: () => timeline.play(),
      onLeaveBack: () => timeline.reverse(),
    },
    paused: true,
    onStart: () => navComponent.classList.add('is-scrolled'),
    onReverseComplete: () => navComponent.classList.remove('is-scrolled'),
  });

  timeline
    .set(navBanner, { display: 'none' })
    .set(navPos, { position: 'fixed', translateY: '-100%', duration: 0 })
    .to(navPos, { translateY: 0, duration: 0.5, ease: 'power2.out' });
};
