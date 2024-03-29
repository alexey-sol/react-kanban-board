export const autoGrowHeight = (element: HTMLElement) => {
  element.style.height = '1rem';
  element.style.height = `${element.scrollHeight}px`;
};

export const resetHeight = (element: HTMLElement) => {
  element.style.height = 'auto';
};
