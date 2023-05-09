export const navPaddingTop = (elements: HTMLDivElement[]) => {
  const nav = document.querySelector<HTMLDivElement>('.nav_component');
  if (!nav) return;
  const navHeight = nav.offsetHeight;

  if (checkMediaQuery('(min-width: 768px)')) {
    elements.forEach((element) => {
      setPadding(element, navHeight);
    });
  }

  window.addEventListener('resize', () => {
    if (checkMediaQuery('(min-width: 768px)')) {
      elements.forEach((element) => setPadding(element, navHeight));
    } else {
      elements.forEach((element) => removePadding(element));
    }
  });

  function checkMediaQuery(query: string): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  }

  function setPadding(element: HTMLDivElement, additionalPaddingTop: number) {
    const styles = window.getComputedStyle(element);
    const currentPaddingTop = parseFloat(styles.paddingTop);
    element.style.paddingTop = `${currentPaddingTop + additionalPaddingTop}px`;
  }

  function removePadding(element: HTMLDivElement) {
    element.style.removeProperty('padding-top');
  }
};
