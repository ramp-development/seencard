export const navPaddingTop = (elements: HTMLElement[]) => {
  const nav = document.querySelector('.nav_component');
  const paddingTop = nav.offsetHeight;

  elements.forEach((element) => {
    const styles = window.getComputedStyle(element);
    const currentPaddingTop = parseFloat(styles.paddingTop);
    element.style.paddingTop = `${currentPaddingTop + paddingTop}px`;
  });
};
