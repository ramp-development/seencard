import { intiScrollingPanels } from './initScrollingPanels';
import { initTestimonials } from './initTestimonials';
import { lazyVideos } from './lazyVideos';
import { navPaddingTop } from './navPaddingTop';

export const initComponents = () => {
  lazyVideos();
  initTestimonials();
  navPaddingTop();

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
