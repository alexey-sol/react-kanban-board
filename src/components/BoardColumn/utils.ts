import { dragTypes } from '@/const';
import { useColumnContext } from '@/contexts/ColumnContext';
import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

export const useBoardColumn = () => {
  const { column } = useColumnContext();

  const [
    { isDragging },
    dragRef,
    dragPreview,
  ] = useDrag(
    () => ({
      collect: (monitor) => ({ isDragging: Boolean(monitor.isDragging()) }),
      item: column,
      type: dragTypes.COLUMN,
    }),
    [],
  );

  useEffect(() => {
    dragPreview(getEmptyImage());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    dragRef,
    isDragging,
  };
};
