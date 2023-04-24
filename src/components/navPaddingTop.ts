export const navPaddingTop = (elements: HTMLElement[]) => {
  const nav = document.querySelector('.nav_component');
  const paddingTop = nav.offsetHeight;

  elements.forEach((element) => {
    element.style.paddingTop = `${paddingTop}px`;
  });
};
