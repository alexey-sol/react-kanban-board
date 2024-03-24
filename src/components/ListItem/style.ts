import {
  css,
  styled,
} from 'styled-components';

type ListItemStyledProps = {
  isOver?: boolean,
};

export const ListItemStyled = styled.li<ListItemStyledProps>`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  min-height: 3.5rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.25rem;

  ${({ isOver = false }) => css`
    border-color: ${isOver ? 'yellow' : 'transparent'};
  `};
`;
