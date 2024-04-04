import { hideableMixin } from '@/app/style/mixins';
import { type HasIsHidden } from '@/app/style/types';
import { styled } from 'styled-components';

export const CardPreviewStyled = styled.section<Partial<HasIsHidden>>`
  display: flex;
  flex: 1;
  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.components.board.card.paddingX};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: box-shadow ${({ theme }) => theme.durations.fast} ease;
  ${hideableMixin};

  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
`;
