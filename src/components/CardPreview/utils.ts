import { useAppDispatch } from '@/app/store/hooks';
import { dragTypes } from '@/const';
import { useColumnContext } from '@/contexts/ColumnContext';
import { type Card } from '@/models';
import { updateCard } from '@/slice';
import { logError } from '@/utils/log';
import { assertIsValidInput } from '@/utils/validators';
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

  const resetMessage = useCallback(() => setMessage(card.message), [
    card.message,
  ]);

  const dispatch = useAppDispatch();

  const handleMessageBlur = useCallback(() => {
    const normalizedMessage = message.trim();

    try {
      assertIsValidInput(message);
      dispatch(updateCard({
        data: { message: normalizedMessage },
        meta: {
          columnId: column.id,
          id: card.id,
        },
      }));
      setMessage(normalizedMessage);
    } catch (error) {
      resetMessage();
      logError(error);
    }
  }, [
    card.id,
    column.id,
    dispatch,
    message,
    resetMessage,
  ]);

  const handleMessageChange = useCallback((value: string) => {
    setMessage(value);
  }, []);

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
    handleMessageBlur,
    handleMessageChange,
    isDragging,
    message,
  };
};
