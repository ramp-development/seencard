import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

export const scroll = () => {
  gsap.registerPlugin(ScrollSmoother);
  ScrollSmoother.create({
    // content: '#smooth-content',
    // wrapper: '#smooth-wrapper',
    smooth: 0.5,
    effects: true,
    smoothTouch: 0.1,
  });
};
