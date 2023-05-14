import { groups } from './groups';
import { highlight } from './highlight';
import { nav } from './nav';
import { scroll } from './scroll';
import { tabs } from './tabs';

export const animations = () => {
  scroll();
  tabs();
  highlight();
  groups();
  nav();
};
