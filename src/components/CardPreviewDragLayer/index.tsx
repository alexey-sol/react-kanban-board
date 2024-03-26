import { CardPreviewDragLayerStyled } from './style';
import { type FC } from 'react';
import {
  type DragLayerMonitor,
  useDragLayer,
} from 'react-dnd';

export const CardPreviewDragLayer: FC = () => {
  const {
    currentOffset,
    isDragging,
    item,
  } = useDragLayer(
    (monitor: DragLayerMonitor) => ({
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
      item: monitor.getItem(),
    }),
  );

  if (!isDragging || !currentOffset) {
    return null;
  }

  return (
    <CardPreviewDragLayerStyled $x={currentOffset.x} $y={currentOffset.y}>
      <p>{item.task}</p>
    </CardPreviewDragLayerStyled>
  );
};
