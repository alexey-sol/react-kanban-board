import { dom } from '@/const.ts';

export const getRootElement = (): HTMLElement => document.querySelector(`#${dom.ROOT_ELEMENT_ID}`) ??
  document.body;
