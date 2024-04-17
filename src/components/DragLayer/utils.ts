import {
  type DragLayerMonitor,
  useDragLayer as useLibraryDragLayer,
} from 'react-dnd';

export const useDragLayer = () => {
  const {
    currentOffset,
    isDragging,
    item,
  } = useLibraryDragLayer(
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
