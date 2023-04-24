import { features } from './features';
import { hero } from './hero';

export const app = () => {
  window.scrollTo(0, 0);
  hero();
  features();
};
