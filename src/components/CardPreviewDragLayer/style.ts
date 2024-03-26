import { CardPreviewStyled } from '@/components/CardPreview/style';
import { type XYCoord } from 'react-dnd';
import {
  css,
  styled,
} from 'styled-components';

type CardPreviewDragLayerStyledProps = {
  $x: XYCoord['x'],
  $y: XYCoord['y'],
};

export const CardPreviewDragLayerStyled = styled(CardPreviewStyled)<CardPreviewDragLayerStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  box-sizing: border-box;
  width: calc(${({ theme }) => theme.components.board.column.width} - 2rem);
  opacity: 0.4;
  pointer-events: none;

  ${({
    $x,
    $y,
  }) => css`
    transform: translate(${$x}px, ${$y}px);
  `};
`;
