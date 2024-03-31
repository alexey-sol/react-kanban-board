import { hideableMixin } from '@/app/style/mixins';
import { type HasIsHidden } from '@/app/style/types';
import { styled } from 'styled-components';

export const CardPreviewStyled = styled.section<Partial<HasIsHidden>>`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  padding: 0 0.5rem;
  background-color: PapayaWhip;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  ${hideableMixin};

  &:hover {
    background-color: Moccasin;
  }
`;
