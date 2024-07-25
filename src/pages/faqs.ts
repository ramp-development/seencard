import { simulateEvent } from '@finsweet/ts-utils';

export const faqs = () => {
  // eslint-disable-next-line no-console
  console.log('faqs');

  const attr = 'data-faqs';
  const targets = [...document.querySelectorAll<HTMLDivElement>(`[${attr}-target]`)];
  const items = [...document.querySelectorAll<HTMLDivElement>(`[${attr}-group]`)];

  // get url params
  const urlParams = new URLSearchParams(window.location.search);
  const scrollTo = urlParams.get('faq');

  items.forEach((item) => {
    const group = item.dataset.faqsGroup;
    const target = targets.find((el) => el.dataset.faqsTarget === group);
    if (!target) return;

    target.appendChild(item);
  });

  if (scrollTo) {
    const target = document.querySelector<HTMLDivElement>(`[${attr}-item="${scrollTo}"]`);
    if (!target) return;

    setTimeout(() => {
      target.scrollIntoView();
      const targetHeader = target.querySelector<HTMLDivElement>('.faq_item-header');
      if (!targetHeader) return;

      simulateEvent(targetHeader, 'click');
    }, 500);
  }

  const linkWrappers = [...document.querySelectorAll<HTMLDivElement>(`[data-faq-link]`)];
  linkWrappers.forEach((linkWrapper) => {
    const anchor = linkWrapper.dataset.faqLink;
    const link = linkWrapper.querySelector<HTMLAnchorElement>('a');
    if (!link) return;

    link.href = `#${anchor}`;
  });
};
