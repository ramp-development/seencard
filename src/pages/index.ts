import { app } from './app';
import { card } from './card';

export const pages = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/the-card':
      card();
      break;
    case '/the-app':
      app();
      break;
    case '/about':
      break;
  }
};
