import {
  type DragLayerMonitor,
  useDragLayer,
} from 'react-dnd';

export const useDragLayerData = () => {
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

  return {
    currentOffset,
    isDragging,
    item,
  };
};
