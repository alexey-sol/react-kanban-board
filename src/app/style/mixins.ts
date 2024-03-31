import { type HasIsHidden } from './types';
import { css } from 'styled-components';

export const hideableMixin = css<Partial<HasIsHidden>>`
  visibility: ${({ $isHidden = false }) => ($isHidden ? 'hidden' : 'inherit')};
`;
