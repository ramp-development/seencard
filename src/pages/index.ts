import { app } from './app';
import { home } from './home';

export const pages = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/':
      home();
      break;
    case '/the-card':
      break;
    case '/the-app':
      //   app();
      break;
    case '/about':
      break;
  }
};
