import { initTestimonials } from './initTestimonials';
import { navPaddingTop } from './navPaddingTop';

export const initComponents = () => {
  const testimonials = document.querySelector('.splide.is-testimonial');
  if (testimonials) initTestimonials(testimonials);

  const navPaddings = document.querySelectorAll('[data-padding-top]');
  navPaddingTop(navPaddings);
};
