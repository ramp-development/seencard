import { gsap } from 'gsap';

export const nav = () => {
  const navPos = document.querySelector('.nav_pos');
  if (!navPos) return;
  const navComponent = navPos.querySelector('.nav_component');
  if (!navComponent) return;
  const navBanner = navPos.querySelector('.nav_banner');

  // define gsap timeline
  const timeline = gsap.timeline({
    paused: true,
    onStart: () => navComponent.classList.add('is-scrolled'),
    onReverseComplete: () => navComponent.classList.remove('is-scrolled'),
  });
  timeline
    .set(navBanner, { display: 'none' })
    .set(navPos, { position: 'fixed', translateY: '-100%', duration: 0 })
    .to(navPos, { translateY: 0, duration: 0.5, ease: 'power2.out' });

  // define the scroll position and window height
  let previousScrollY = window.scrollY;
  const { innerHeight } = window;

  // play the timeline if the user has scrolled past the window height
  if (previousScrollY > innerHeight) timeline.play();

  // listen to the scroll event and play or reverse the timeline
  window.addEventListener('scroll', () => {
    if (previousScrollY < innerHeight && window.scrollY > innerHeight) {
      timeline.play();
    } else if (previousScrollY > innerHeight && window.scrollY < innerHeight) {
      timeline.reverse();
    }

    previousScrollY = window.scrollY;
  });
};
