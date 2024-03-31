import { CardPreviewStyled } from '@/components/CardPreview/style';
import { type XYCoord } from 'react-dnd';
import {
  css,
  styled,
} from 'styled-components';

type DragLayerStyledProps = {
  $x: XYCoord['x'],
  $y: XYCoord['y'],
};

export const DragLayerStyled = styled(CardPreviewStyled)<DragLayerStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  box-sizing: border-box;
  pointer-events: none;

  ${({
    $x,
    $y,
  }) => css`
    transform: translate(${$x}px, ${$y}px);
  `};
`;
