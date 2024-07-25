import { app } from './app';
import { card } from './card';
import { faqs } from './faqs';

export const pages = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/the-card':
      card();
      break;
    case '/the-app':
      app();
      break;
    case '/faqs':
      faqs();
      break;
  }
};
