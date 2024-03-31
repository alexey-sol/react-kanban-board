import { hideableMixin } from '@/app/style/mixins';
import { type HasIsHidden } from '@/app/style/types';
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
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  ${hideableMixin};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: initial;
  }
`;

export const ColumnHeaderStyled = styled.h3`
  display: flex;
`;

export const InputStyled = styled.input`
  flex: 1;
  box-sizing: border-box;
  padding: 0.5rem;
  border-width: 0;
  background-color: transparent;
  font-size: 1.25rem;
  cursor: pointer;
`;
