import { initTestimonials } from './initTestimonials';

export const initComponents = () => {
  const testimonials = document.querySelector('.splide.is-testimonial');
  if (testimonials) initTestimonials(testimonials);
};
