import { gsap } from 'gsap';

export const nav = () => {
  console.log('nav animation loaded');
  const navPos = document.querySelector('.nav_pos');
  if (!navPos) return;

  const navComponent = navPos.querySelector('.nav_component');
  if (!navComponent) return;

  let previousScrollY = window.scrollY;
  const { innerHeight } = window;
  window.addEventListener('scroll', () => {
    if (previousScrollY < innerHeight && window.scrollY > innerHeight) {
      gsap.set(navPos, { position: 'fixed', translateY: '-100%', duration: 0 });
      navComponent.classList.add('is-scrolled');
      gsap.to(navPos, { translateY: 0, duration: 0.5, ease: 'power2.out' });
    } else if (previousScrollY > innerHeight && window.scrollY < innerHeight) {
      gsap.to(navPos, {
        translateY: '-100%',
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          navComponent.classList.remove('is-scrolled');
          gsap.set(navPos, { position: 'absolute', translateY: 0, duration: 0 });
        },
      });
    }

    previousScrollY = window.scrollY;
  });
};
