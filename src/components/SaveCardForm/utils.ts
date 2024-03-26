import * as cn from './const';

export const isValidInputOnUpdate = (value: string) => value.length <= cn.INPUT_MAX_LENGTH;

export const isValidInputOnAdd = (value: string) => isValidInputOnUpdate(value) &&
  value.trim().length > 0;

// eslint-disable-next-line no-console -- Good enough for now
export const handleValidationError = (errorMessage: string) => console.error(errorMessage);

export const autoGrowHeight = (element: HTMLElement) => {
  element.style.height = '1rem';
  element.style.height = `${element.scrollHeight}px`;
};

export const resetHeight = (element: HTMLElement) => {
  element.style.height = 'auto';
};
