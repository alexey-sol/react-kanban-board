import {
  css,
  styled,
} from 'styled-components';

type ListItemStyledProps = {
  $isOver?: boolean,
};

export const ListItemStyled = styled.li<ListItemStyledProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  min-height:  ${({ theme }) => theme.components.board.listItem.minHeight};
  border-width: 2px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${({ $isOver = false }) => css`
    border-color: ${$isOver ? 'yellow' : 'transparent'};
  `};
`;
