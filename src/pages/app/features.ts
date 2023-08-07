import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as utils from 'src/animations/utils';

export const features = () => {
  const components = [
    ...document.querySelectorAll('[data-animation-element="app-features-component"]'),
  ];

  components.forEach((component) => {
    const header = component?.querySelector('[data-animation-element="app-features-header"]');
    const title = header?.querySelector('[data-animation-element="app-features-title"]');
    const subTitle = header?.querySelector('[data-animation-element="app-features-sub"]');

    const wrapper = component?.querySelector('[data-animation-element="app-features-wrapper"]');
    const list = wrapper?.querySelector('[data-animation-element="app-features-list"]');
    const items = [...wrapper?.querySelectorAll('[data-animation-element="app-features-item"]')];
    const phones = wrapper.querySelectorAll('[data-animation-element="app-feature-phone"]');

    const headerMM = gsap.matchMedia(),
      breakPoint = 768;

    headerMM.add(
      {
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;

        const headerTl = gsap.timeline({
          defaults: {
            duration: 1,
            ease: 'power2.out',
            stagger: 0.01,
            force3D: true,
          },
          scrollTrigger: {
            trigger: header,
            start: 'bottom bottom',
            end: 'bottom 50%',
            scrub: 1,
          },
        });

        document.addEventListener('refreshScrollTrigger', () => {
          headerTl.scrollTrigger?.refresh();
        });

        headerTl
          .to(title?.children[0], {
            translateX: isDesktop ? '-12rem' : '0',
            translateY: isMobile ? '-2rem' : '0',
          })
          .to(
            title?.children[1],
            {
              translateX: isDesktop ? '12rem' : '0',
              translateY: isMobile ? '2rem' : '0',
            },
            '<'
          );
        utils.splitLines(subTitle, headerTl, '<50%');
      }
    );

    const featuresMm = gsap.matchMedia();
    featuresMm.add('(min-width: 768px)', () => {
      const featuresTimeline = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power2.out',
          stagger: 0.01,
          force3D: true,
        },
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });

      document.addEventListener('refreshScrollTrigger', () => {
        featuresTimeline.scrollTrigger?.refresh();
      });

      items.forEach((item, index) => {
        const heading = item.querySelector('[data-animation-element="app-feature-heading"]');
        const sub = item.querySelector('[data-animation-element="app-feature-sub"]');
        const phone = item.querySelector('[data-animation-element="app-feature-phone"]');

        utils.splitChars(heading, featuresTimeline, '<');
        featuresTimeline.from(phone, { opacity: 0, duration: 0.5 }, '<');
        utils.splitLines(sub, featuresTimeline, '<0.1');

        if (index === items.length - 1) return;
        utils.splitCharsOut(heading, featuresTimeline);
        utils.splitLinesOut(sub, featuresTimeline, '<0.1');
      });

      featuresTimeline.from(
        phones,
        {
          scale: 0.75,
          ease: 'Power0.easeNone',
          duration: featuresTimeline.duration(),
          stagger: 0,
        },
        0
      );
    });

    // featuresMm.add('(max-width: 767px)', () => {
    //   items.forEach((item) => {
    //     const itemTimeline = gsap.timeline({
    //       defaults: {
    //         duration: 1,
    //         ease: 'power2.out',
    //         stagger: 0.01,
    //         force3D: true,
    //       },
    //       scrollTrigger: {
    //         trigger: item.querySelector('[data-animation-element="app-feature-content"]'),
    //         start: 'top 80%',
    //       },
    //     });

    //     utils.splitChars(
    //       item.querySelector('[data-animation-element="app-feature-heading"]'),
    //       itemTimeline,
    //       '<'
    //     );
    //     utils.splitLines(
    //       item.querySelector('[data-animation-element="app-feature-sub"]'),
    //       itemTimeline,
    //       '<0.1'
    //     );

    //     document.addEventListener('refreshScrollTrigger', () => {
    //       itemTimeline.scrollTrigger?.refresh();
    //     });
    //   });
    // });
  });
};
