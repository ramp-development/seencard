import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { animations } from './animations';
import { initComponents } from './components';
import { app } from './pages/app';
import { home } from './pages/home';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(Flip, ScrollTrigger, SplitText);

  const { pathname } = window.location;
  switch (pathname) {
    case '/':
      home();
      break;
    case '/the-card':
      break;
    case '/the-app':
      app();
      break;
    case '/about':
      break;
  }

  initComponents();
  animations();
});
