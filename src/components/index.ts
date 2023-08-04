import { makeTabActive } from '$utils/makeTabActive';

import { intiScrollingPanels } from './initScrollingPanels';
import { initTestimonials } from './initTestimonials';
import { navPaddingTop } from './navPaddingTop';

export const initComponents = () => {
  const testimonials = document.querySelector<HTMLDivElement>('.splide.is-testimonial');
  if (testimonials) initTestimonials(testimonials);

  const navPaddings = [...document.querySelectorAll<HTMLDivElement>('[data-padding-top]')];
  navPaddingTop(navPaddings);

  const activeTabs = [...document.querySelectorAll<HTMLDivElement>('[data-tab-button="active"]')];
  if (activeTabs.length) makeTabActive(activeTabs);

  const scrollingPanels = document.querySelector<HTMLDivElement>(
    '[data-scrolling-panels="component"]'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(
      (entry) => {
        const intersecting = entry.isIntersecting;
        if (!intersecting) return;
        intiScrollingPanels();
        observer.unobserve(entry.target);
      },
      {
        rootMargin: '100px',
        threshold: 0,
      }
    );
  });

  if (scrollingPanels) observer.observe(scrollingPanels);
};
