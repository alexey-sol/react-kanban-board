import { styled } from 'styled-components';

export const BoardColumnStyled = styled.li`
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: initial;
  }
`;
