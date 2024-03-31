import {
  css,
  styled,
} from 'styled-components';

type DroppableLayerStyledProps = {
  $isOver?: boolean,
};

export const DroppableLayerStyled = styled.li<DroppableLayerStyledProps>`
  border-width: 2px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${({ $isOver = false }) => css`
    border-color: ${$isOver ? 'yellow' : 'transparent'};
  `};
`;
