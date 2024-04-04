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
  transition:
    border-color ${({ theme }) => theme.durations.fast} ease,
    background-color ${({ theme }) => theme.durations.fast} ease;

  ${({
    $isOver = false,
    theme,
  }) => {
    const isOverStyle = $isOver ? theme.colors.secondary : 'transparent';

    return css`
      background-color: ${isOverStyle};
      border-color: ${isOverStyle};
    `;
  }};
`;
