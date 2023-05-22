import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import { animations } from './animations';
import { initComponents } from './components';
import { pages } from './pages';
import { detectBrowser } from '$utils/detectBroswer';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.registerPlugin(Flip, ScrollTrigger, SplitText);

  pages();
  initComponents();
  animations();

  detectBrowser();
});
