import { CardPreviewStyled } from '@/components/CardPreview/style';
import { type XYCoord } from 'react-dnd';
import {
  css,
  styled,
} from 'styled-components';

type CardPreviewDragLayerStyledProps = {
  currentOffset: XYCoord,
};

export const CardPreviewDragLayerStyled = styled(CardPreviewStyled)<CardPreviewDragLayerStyledProps>`
  box-sizing: border-box;
  left: 0;
  opacity: 0.4;
  pointer-events: none;
  position: fixed;
  top: 0;
  ${({ currentOffset }) => css`
    transform: translate(${currentOffset.x}px, ${currentOffset.y}px);
  `};

  width: 468px;
  zIndex: 1_000;
`; // TODO
