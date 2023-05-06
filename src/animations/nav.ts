import { gsap } from 'gsap';

export const nav = () => {
  const navPos = document.querySelector('.nav_pos');
  if (!navPos) return;

  const navComponent = navPos.querySelector('.nav_component');
  if (!navComponent) return;

  const navBanner = navPos.querySelector('.nav_banner');

  let previousScrollY = window.scrollY;
  const { innerHeight } = window;

  if (previousScrollY > innerHeight) scrolledNav();

  window.addEventListener('scroll', () => {
    if (previousScrollY < innerHeight && window.scrollY > innerHeight) {
      scrolledNav();
    } else if (previousScrollY > innerHeight && window.scrollY < innerHeight) {
      staticNav();
    }

    previousScrollY = window.scrollY;
  });

  function scrolledNav() {
    gsap.set(navPos, { position: 'fixed', translateY: '-100%', duration: 0 });
    if (navComponent) navComponent.classList.add('is-scrolled');
    if (navBanner) navBanner.style.display = 'none';
    gsap.to(navPos, { translateY: 0, duration: 0.5, ease: 'power2.out' });
  }

  function staticNav() {
    gsap.to(navPos, {
      translateY: '-100%',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        if (navComponent) navComponent.classList.remove('is-scrolled');
        if (navBanner) navBanner.style.removeProperty('display');
        gsap.set(navPos, { position: 'absolute', duration: 0 });
        gsap.to(navPos, { translateY: 0, duration: 0.5, ease: 'power2.out' });
      },
    });
  }
};
