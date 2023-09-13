export const navPaddingTop = () => {
  const navPaddings = [...document.querySelectorAll<HTMLDivElement>('[data-padding-top]')];
  if (!navPaddings.length) return;

  const nav = document.querySelector<HTMLDivElement>('.nav_component');
  if (!nav) return;
  const navHeight = nav.offsetHeight;

  if (checkMediaQuery('(min-width: 768px)')) {
    navPaddings.forEach((navPadding) => {
      setPadding(navPadding, navHeight);
    });
  }

  window.addEventListener('resize', () => {
    if (checkMediaQuery('(min-width: 768px)')) {
      navPaddings.forEach((navPadding) => setPadding(navPadding, navHeight));
    } else {
      navPaddings.forEach((navPadding) => removePadding(navPadding));
    }
  });

  function checkMediaQuery(query: string): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  }

  function setPadding(navPadding: HTMLDivElement, additionalPaddingTop: number) {
    const styles = window.getComputedStyle(navPadding);
    const currentPaddingTop = parseFloat(styles.paddingTop);
    navPadding.style.paddingTop = `${currentPaddingTop + additionalPaddingTop}px`;
  }

  function removePadding(navPadding: HTMLDivElement) {
    navPadding.style.removeProperty('padding-top');
  }
};
