import { app } from './app';

export const pages = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/the-card':
      break;
    case '/the-app':
      app();
      break;
    case '/about':
      break;
  }
};
