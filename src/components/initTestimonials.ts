import { Splide } from '@splidejs/splide';
export const initTestimonials = (testimonials: HTMLElement) => {
  const slider = new Splide(testimonials, {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    gap: '48px',
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 2500,
    breakpoints: {
      991: {
        perPage: 2,
        gap: '32px',
      },
      767: {
        perPage: 1,
        gap: '32px',
      },
    },
  }).mount();
};
