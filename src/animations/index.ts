import { groups } from './groups';
import { highlight } from './highlight';
import { nav } from './nav';
import { tabs } from './tabs';

export const animations = () => {
  tabs();
  highlight();
  groups();
  nav();
};
