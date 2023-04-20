import * as utils from '../utils';

export const features = (element: Element, timeline: GSAPTimeline, delay: string) => {
  [...element.children].forEach((feature, index) => {
    const iconWrapper = feature.querySelector('[data-animation-element="feature-icon"]');
    const heading = feature.querySelector('[data-animation-element="heading"]');
    const sub = feature.querySelector('[data-animation-element="sub"]');

    const itemDelay = index === 0 ? delay : '<-0.2';
    if (iconWrapper && iconWrapper.children) utils.icons(iconWrapper, timeline, itemDelay);
    if (heading) utils.splitChars(heading, timeline, '<0.1');
    if (sub) utils.splitLines(sub, timeline, '<0.25');
  });
};
