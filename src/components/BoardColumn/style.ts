import { hideableMixin } from '@/app/style/mixins';
import { type HasIsHidden } from '@/app/style/types';
import { IconButton } from '@/components/Button';
import { styled } from 'styled-components';

export const BoardColumnStyled = styled.section<Partial<HasIsHidden>>`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  box-sizing: border-box;
  min-width: ${({ theme }) => theme.components.board.column.minWidth};
  width: ${({ theme }) => theme.components.board.column.width};
  height: fit-content;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.greyLightest};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  ${hideableMixin};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: initial;
  }
`;

export const ColumnHeaderStyled = styled.h3`
  display: flex;
  align-items: center;
`;

export const InputStyled = styled.input`
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  outline: transparent;
  font-size: 1.5rem;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.colors.purpleDark};
`;

export const IconButtonStyled = styled(IconButton)`
  margin-right: ${({ theme }) => theme.components.board.card.paddingX};
`;

export const DragIconButtonStyled = styled(IconButton)`
  cursor: grab;
`;
