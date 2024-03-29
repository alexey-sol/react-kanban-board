import { useAppDispatch } from '@/app/store/hooks';
import { dragTypes } from '@/const';
import { useColumnContext } from '@/contexts/ColumnContext';
import { type Card } from '@/models';
import { updateCard } from '@/slice';
import {
  useCallback,
  useState,
} from 'react';
import { useDrag } from 'react-dnd';

export type UseCardPreviewDataProps = {
  readonly card: Card,
};

export const useCardPreviewData = ({ card }: UseCardPreviewDataProps) => {
  const { column } = useColumnContext();

  const [
    message,
    setMessage,
  ] = useState(card.message);

  const dispatch = useAppDispatch();

  const onMessageChange = useCallback((value: string) => {
    setMessage(value);

    dispatch(updateCard({
      data: { message: value },
      meta: {
        columnId: column.id,
        id: card.id,
      },
    }));
  }, [
    card.id,
    column.id,
    dispatch,
  ]);

  const [
    { isDragging },
    dragRef,
    dragPreview,
  ] = useDrag(
    () => ({
      collect: (monitor) => ({ isDragging: Boolean(monitor.isDragging()) }),
      item: card,
      type: dragTypes.CARD,
    }),
    [],
  );

  return {
    dragPreview,
    dragRef,
    isDragging,
    message,
    onMessageChange,
  };
};
